import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppWalletProvider from "../components/AppWalletProvider";
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
        <AppWalletProvider>
          <Navbar />
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
