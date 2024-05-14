import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import XIcon from "@mui/icons-material/X";
import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons-react";

const words =
  "I'm an enterprising college sophomore on a gap year and a full stack engineer focusing on Web Development and Solana Blockchain Development. I'm passionate about building consumer applications and tools that enable everyone to utilize emerging technologies";

export default function About() {
  return (
    <div className="flex flex-col items-center -mt-64">
      <div className="flex flex-row gap-4 items-center">
        <a
          href="https://twitter.com/adlonymous"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </a>
        <a
          href="https://github.com/adlonymous"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub stroke={2} />
        </a>
        <a
          href="https://t.me/adlonymous"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandTelegram stroke={2} />
        </a>
      </div>
      <TextGenerateEffect words={words} className="font-mono md:px-32 pt-20" />
    </div>
  );
}
