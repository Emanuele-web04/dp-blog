import Navbar from "@/components/Navbar";
import React from "react";
import articles from "@/lib/articles";
import Article from "@/components/Article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles"
}

const Page = () => {
  return (
    <div className="w-full container max-w-4xl overflow-x-hidden m-auto flex flex-col py-6 h-full">
      <ul className="my-4 px-6 flex flex-col space-y-3">
        {articles.map(
          ({
            title,
            description,
            image,
            content,
            slug,
            readTime,
            publishedDate,
            tags,
          }) => (
            <li key={slug + "-" + title}>
              <Article
                title={title}
                content={content}
                slug={slug}
                description={description}
                image={image}
                readTime={readTime}
                publishedDate={publishedDate}
                tags={tags}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Page;
