'use client'
import React from "react";
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'
import { Mail, SendHorizonal, ArrowDownToLine, LayoutGrid, Wallet, Zap, Settings, Search, Phone, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";

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
}

export default function DownloadSection() {
return (
    <>
     <main className="relative w-full min-h-screen overflow-hidden bg-violet-300 flex flex-col justify-center items-center text-center px-4 rounded-t-4xl">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
             

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-6xl font-bold md:text-7xl text-purple-900 mt-4"
              >
               Download BlueBerry to get started
              </TextEffect>
               <p className="text-xl font-medium text-black/40 mt-8">
               Trusted by more than 15 million people
              </p>

              <motion.div variants={transitionVariants.item} className="mt-26">
                <Button
                  size="lg"
                  className="rounded-full h-14  px-8 text-lg font-semibold bg-white hover:bg-white/80 hover:scale-95 cursor-pointer text-purple-900  duration-300"
                >
                  <Smartphone className="mr-3 h-5 w-5" />
                  Download BlueBerry
                </Button>
              </motion.div>
              </div>
              </div>
              </section>
</main>
</>
)
}
