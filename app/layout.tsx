import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aadil's Zone",
  description: "Aadil's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
