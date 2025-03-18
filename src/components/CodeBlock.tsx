// components/CodeBlock.tsx
"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuCopy, LuCheck } from "react-icons/lu";
import { useState } from "react";

interface CodeBlockProps {
  children: string;
  className?: string;
}

// Controlla se è un blocco di codice (pre) o codice inline
export default function CodeBlock({ children, className }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || ""); // Estrai il linguaggio
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 1200);
  }

  if (match) {
    return (
      <div className="flex flex-col w-full rounded-xl ring-1 ring-neutral-300 justify-end overflow-clip">
      <div className="flex w-full px-3 py-2.5 justify-between items-center bg-neutral-100">
        <p className="text-sm my-0 font-mono text-gray-600">{match[1]}</p>
        <button
          onClick={handleCopy}
          className="my-0 text-neutral-800 font-medium focus:outline-none"
        >
          {copy ? <LuCheck/> : <LuCopy/>}
        </button>
      </div>
      <SyntaxHighlighter
        language={match[1]}
        style={oneLight}
        customStyle={{
          fontFamily: "var(--font-geist-mono), monospace",
          margin: 0,
          padding: "1rem",
          borderRadius: "0 0 0.75rem 0.75rem", // Solo gli angoli inferiori
        }}
        className="rounded-lg font-mono"
        codeTagProps={{ style: { all: "unset" } }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
    );
  }

  return <code>{children}</code>;
}
