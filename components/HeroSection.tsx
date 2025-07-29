'use client'
import React from "react";
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'
import { Mail, SendHorizonal, ArrowDownToLine, LayoutGrid, Wallet, Zap, Settings, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";


const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="relative w-full min-h-screen overflow-hidden bg-[#f5f2ff] flex flex-col justify-center items-center text-center px-4">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <p className="text-xl font-medium text-black/70">
                The crypto wallet that'll take you places
              </p>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-6xl font-bold md:text-9xl text-purple-900 mt-4"
              >
                Your trusted companion
              </TextEffect>

              <motion.div variants={transitionVariants.item} className="mt-26">
                <Button
                  size="lg"
                  className="rounded-full h-14  px-8 text-lg font-semibold bg-purple-500 hover:bg-purple-800 text-white shadow-lg shadow-purple-500/40"
                >
                  <ArrowDownToLine className="mr-3 h-5 w-5" />
                  Download BlueBerry
                </Button>
              </motion.div>



              <div
                aria-hidden
                className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left"
              >
                <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                  <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                </div>
                <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                  <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                    <AppComponent />

                    <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const AppComponent = () => {
  return (
    // Main container with dark theme, rounded corners, and padding.
    <div className="w-full h-full bg-[#1C1C1E] text-white rounded-[1.5rem] shadow-2xl p-4 flex flex-col gap-4">
      
      {/* Header: Displays the wallet icon and name */}
      <div className="flex items-center gap-2">
        <img src="/blueberry-logo.png" alt="User" width={42} height={28} className="rounded-full  p-1" />
        <span className="font-semibold">Main Wallet</span>
      </div>

      {/* Balance: Shows the main dollar value and daily change */}
      <div>
        <h2 className="text-4xl font-bold tracking-tight">$3,108.47</h2>
        <p className="text-sm font-semibold text-green-400">+5.43 (2.13%)</p>
      </div>

      {/* Action Buttons: Simple "Buy" and "Send" buttons */}
      <div className="flex w-full gap-3">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg text-white">Buy</Button>
        <Button className="w-full bg-gray-700 hover:bg-gray-600 rounded-lg text-white">Send</Button>
      </div>

      {/* Token List: A simple, static list of a couple of tokens */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Ethereum</span>
          <span>$1,942.82</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Solana</span>
          <span>$817.37</span>
        </div>
      </div>

    </div>
  );
};
