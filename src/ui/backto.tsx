import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
const BackTo = ({ path }: { path: string }) => {
  return (
    <Link href={path} className="flex gap-x-1 items-center text-sm no-underline hover:underline-offset-1 text-black">
      <FaArrowLeft /> 
      <p className="font-inter">Back</p>
    </Link>
  );
};

export default BackTo;
