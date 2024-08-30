"use client";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import XIcon from "@mui/icons-material/X";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

import Link from "next/link";
import BlinkComp from "./BlinkComp";

const words =
  "I'm a CS Sophomore at Rutgers University and a full stack engineer focusing on Web Development and Solana Blockchain Development. I like building cool stuff on the web and especially on the Solana blockchain. I also write articles and threads that focus on helping less experienced developers as well as technical-adjacent ecosystem enthusiasts know more about how the Solana blockchain works and what new technologies are being built on it.";

export default function Hero() {
  return (
    <>
      <div className="bg-black flex flex-col justify-normal gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/adlonymous/portfolio/assets/93305952/1beb7d90-8d48-46fc-af98-9e24b5eb5038" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <HeroHighlight className="font-mono">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Hey there, I&apos;m <Highlight className="text-black">Aadil</Highlight>
            <br />
          </motion.h1>
        </HeroHighlight>
        <p className="font-mono text-md text-center ">
          better known as adlonymous or mous(pronounced moose) on the internet
        </p>
        <h2 className="font-mono text-xl text-center italic font-semibold">
          Dev @{" "}
          <a className="underline decoration-emerald-500 decoration-wavy decoration-2 underline-offset-2">
            MonkeDAO
          </a>{" "}
          | Head of Growth @{" "}
          <a className="underline decoration-violet-500 decoration-wavy decoration-2 underline-offset-2">
            Solana University
          </a>
        </h2>
        <p className="flex flex-row gap-4 items-center z-[50]">
          <Link href="https://twitter.com/adlonymous" target="_blank" rel="noopener noreferrer">
            <XIcon />
          </Link>
          <a href="https://github.com/adlonymous" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub stroke={2} />
          </a>
          <a href="https://t.me/adlonymous" target="_blank" rel="noopener noreferrer">
            <IconBrandTelegram stroke={2} />
          </a>
        </p>

        <TextGenerateEffect words={words} className="font-mono md:px-28 pt-12 text-justify" />
      </div>
      <BackgroundBeams />
    </>
  );
}
