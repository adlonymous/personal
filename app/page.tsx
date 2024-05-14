import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black bg-grid-white/[0.5] txt-white flex-col items-center justify-normal gap-6 p-4 pt-8">
      <Hero />
      <BackgroundBeams />
    </main>
  );
}
