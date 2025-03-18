import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import CodeBlock from "@/components/CodeBlock";
import remarkGfm from "remark-gfm";
import CustomLink from "@/components/CustomLink";
import Divider from "@/ui/divider";
import BackTo from "@/ui/backto";
import { Frontmatter } from "@/types/frontmatter";
type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page(props: ArticlePageProps) {
  const params = await props.params;
  const { slug } = params;
  const content = await fs.readFile(
    path.join(process.cwd(), "src/markdown", `${slug}.mdx`),
    "utf-8"
  );
  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components: {
      pre: (props: any) => <div {...props} />, // Evita un doppio wrapping
      code: (props: any) => <CodeBlock {...props} />,
      Link: CustomLink, // Usa CustomLink al posto di Link
    },
  });

  return (
    <div className="w-full container m-auto">
      <div className="relative w-full max-w-3xl h-auto">
        <Image
          src={data.frontmatter.image}
          width={0}
          height={0}
          sizes="100vw" // 🔥 Permette di adattare la larghezza disponibile
          className="w-full overflow-x-hidden h-auto object-contain"
          alt=""
        />
      </div>
      <Divider />
      <div className="flex flex-col gap-y-4">
        <h1 className="font-plus text-black text-5xl m-0 p-0">
          {data.frontmatter.title}
        </h1>
        <h3 className="text-gray-600 font-normal font-sans m-0 p-0">
          {data.frontmatter.description}
        </h3>
      </div>
      <p>Read Time: {data.frontmatter.readTime}min</p>
      <Divider />
      <BackTo path="/articles" />
      {data.content}
    </div>
  );
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const content = await fs.readFile(
    path.join(process.cwd(), "src/markdown", `${slug}.mdx`),
    "utf-8"
  );
  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: `${data.frontmatter.title}`,
    description: `${data.frontmatter.description}`,
  };
}

export async function generateStaticParams() {
  try {
    const files = await fs.readdir(path.join(process.cwd(), "src/markdown"));
    const slugs = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => ({
        slug: file.replace(/\.mdx$/, ""),
      }));

    return slugs;
  } catch (error) {
    console.error(`Error generating params: ${error}`);
    return [{ slug: "welcome" }];
  }
}

export const dynamicParams = false;
