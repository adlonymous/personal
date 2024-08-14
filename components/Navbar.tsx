"use client";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  return (
    <nav className="p-4 md:px-12 sticky top-0 drop-shadow-xl z-10 bg-slate-950 text-white rounded-br-lg rounded-bl-lg flex flex-row justify-between items-center">
      <h1 className="text-center font-mono text-xl">&lt;adlonymous&#47;&gt;</h1>
      <WalletMultiButton style={{}} />
    </nav>
  );
}
