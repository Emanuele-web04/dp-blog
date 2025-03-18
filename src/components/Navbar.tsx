import { bricolageGrotesque } from "@/lib/fonts";
import React from "react";
import { FiSun } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="rounded-xl bg-white/40 flex items-center justify-between w-full shadow m-auto px-6 py-3 sm:py-4 container ring-1 ring-inset ring-neutral-200">
      <Link href={"/"} className="font-semibold font-source">
        DP's Blog
      </Link>
      <div className="flex items-center space-x-3">
        <Link href={"/articles"}><p className="text-sm">Articles</p></Link>
        <button
          type="button"
          className="ring-1 rounded-lg ring-inset ring-neutral-300 bg-neutral-200/40"
        >
          <Link
            href={"https://x.com/manuvelopment"}
            target="_blank"
          >
            <RiTwitterXFill className="text-lg m-2" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
