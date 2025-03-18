import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="w-full container max-w-4xl m-auto px-3 sm:px-0 flex flex-col justify-center py-6">
      <section className="intro m-auto max-w-3xl px-6 space-y-6">
        <div className="flex flex-col pt-8 space-y-2">
          <Image
            src={"/me.png"}
            alt=""
            width={50}
            height={50}
            className="rounded-full h-[50px] object-cover"
          />
          <h1 className="text-3xl !mt-0 font-bold">
            <span className="text-2xl">Hey there! 👋</span> <br />
            <span className="relative">
              <span className="absolute bg-sky-200 w-full h-[10px] bottom-0"></span>
              <span className="relative font-extrabold">I'm Emanuele</span>
            </span>
          </h1>
        </div>

        <hr className="border-t border-neutral-300" />

        <p className="text-lg leading-snug">
          Welcome to my blog. <br /> I’m <strong>Emanuele Di Pietro</strong>, an{" "}
          <strong>iOS/Web developer</strong> with a background from the Apple
          Developer Academy. I build apps and websites, experiment with new
          technologies, and share my development journey here and on{" "}
          <Link
            href={"https://x.com/manuvelopment"}
            className="text-sky-500 font-semibold text-lg"
          >
            𝕏
          </Link>
          .
        </p>

        <p className="text-lg leading-snug">
          Technology has always been a passion of mine, but it's not the only
          one. I also have a strong interest in <strong>fitness</strong>,
          <strong> Formula 1</strong>, and the mindset that drives high
          performance, both in coding and in life.
        </p>

        <hr className="border-t border-neutral-300" />

        <p className="text-lg leading-snug">
          I like to focus on <strong>real projects</strong> rather than endless
          tutorials. Some of the things I’ve built include{" "}
          <Link
            className="text-sky-500 hover:underline font-mono"
            href={
              "https://apps.apple.com/it/app/tidyspace-links-photos-docs/id6504195620?l=en-GB"
            }
            target="_blank"
          >
            TidySpace
          </Link>
          , a tool for staying organized, and{" "}
          <Link
            href={
              "https://apps.apple.com/ng/developer/emanuele-di-pietro/id1728279040"
            }
            className="font-mono text-sky-500"
          >
            3 more apps
          </Link>
          , and some still in building. When I work on
          something, I care about{" "}
          <strong>
            clean code, usability, and making things that actually work
          </strong>
          .
        </p>

        <hr className="border-t border-neutral-300" />

        <p className="text-lg leading-relaxed">
          Besides iOS, I also enjoy working with <strong>React</strong>. I’ve
          built things like <em>ClientFlow</em>, a client management tool, and a
          dictionary app designed for ease of use. I’ve also hit a few
          milestones along the way, like getting my first app subscription—small
          wins that keep me motivated.
        </p>

        <p className="text-lg leading-relaxed">
          Right now, I’m diving into <strong>Next.js</strong> to expand my web
          development skills. I already have experience with{" "}
          <strong>React, Swift, C, and more</strong>, but I always enjoy
          learning new things and improving my workflow.
        </p>

        <hr className="border-t border-neutral-300" />

        <p className="text-lg leading-relaxed">
          This blog is a space where I write about different topics that
          interest me:
          <strong> life lessons, coding, productivity</strong>, and anything
          else that sparks curiosity. It’s a mix of what I’m working on, things
          I’m learning, and challenges I’ve faced along the way.
        </p>

        <hr className="border-t border-neutral-300" />

        <p className="text-lg leading-relaxed font-semibold text-neutral-700">
          Stick around, and let’s build cool things together.
        </p>
      </section>
    </div>
  );
};

export default Home;
