import React from "react";
import Link from "next/link";
import { plusJakarta } from "@/lib/fonts";
import Image from "next/image";
import { IoPricetagOutline } from "react-icons/io5";

type ArticleProps = {
  title: string;
  content: React.ReactElement<
    unknown,
    string | React.JSXElementConstructor<any>
  >;
  slug: string;
  description: string;
  image: string;
  publishedDate: string;
  readTime: number;
  tags?: string[];
};

const Article = (article: ArticleProps) => {
  const {
    title,
    slug,
    content,
    description,
    image,
    publishedDate,
    readTime,
    tags,
  } = article;

  return (
    <div className="px-4 md:px-6 py-4 w-full ring-1 ring-inset ring-neutral-300 rounded-xl bg-white/40 hover:bg-neutral-100">
      <Link href={`/articles/${slug}`}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {publishedDate && (
              <p className="text-gray-500 text-xxs italic mb-1">
                Published: {publishedDate}
              </p>
            )}
            <h1 className={`${plusJakarta.className} font-bold text-xl`}>
              {title}
            </h1>
            <p className="line-clamp-2 font-sans text-xs md:text-sm text-neutral-600">
              {description ? description : content}
            </p>
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center mt-4">
              {readTime && (
                <p className="text-gray-600 font-medium text-xxs">
                  <span className="italic">Read Time:</span>{" "}
                  <span className="text-black">{readTime}min</span>
                </p>
              )}
              <div className="flex items-center gap-1.5">
                {tags?.map((tag, index) => (
                  <div
                    key={tag + index}
                    className="flex gap-x-1 items-center text-xxs ring-1 ring-sky-700/20 bg-sky-50 text-sky-700 ring-inset rounded-lg py-1 px-2 hover:-translate-y-0.5 transition duration-100"
                  >
                    <IoPricetagOutline />
                    <p className="font-mono">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {image && (
            <div className="relative w-[80px] h-[80px]">
              <Image
                src={image}
                sizes="80px"
                fill
                className="object-contain"
                alt=""
              />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Article;
