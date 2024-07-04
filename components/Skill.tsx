import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "solana",
  "react",
  "tailwindcss",
  "prisma",
  "drizzle",
  "rust",
  "nodedotjs",
  "postgresql",
  "git",
  "vercel",
  "python",
  "c",
  "html5",
  "css3",
  "python",
  "shadcnui",
  "express",
  "github",
  "twitter",
  "medium",
  "mongodb",
  "npm",
  "trpc",
  "java",
];

export default function Skill() {
  return (
    <div className="flex md:flex-row flex-col justify-between gap-4 md:py-20 py-5">
      <div className="relative flex h-full w-full bg-gray-900 max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="flex flex-col items-center justify-start ">
        <h1 className="font-mono text-4xl text-center">More about me</h1>
        <p className="text-mono">{/* Future stuff here */}</p>
      </div>
    </div>
  );
}
