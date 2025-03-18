"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CustomLink({ href, children, className }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-start gap-1 ${className || ""}`}
      style={{ display: "inline" }} // Forza il comportamento inline
    >
      {children}
      <FiArrowUpRight className="relative bottom-0.5 inline-block text-sm" />
    </Link>
  );
}