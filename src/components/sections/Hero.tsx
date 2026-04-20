"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, PlayFilledAlt, Close } from "@carbon/icons-react";

const avatars = ["A", "B", "C", "D"];

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!demoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDemoOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [demoOpen]);

  const closeDemo = () => {
    videoRef.current?.pause();
    setDemoOpen(false);
  };

  return (
    <section className="pt-[68px] md:pt-[80px] bg-white dark:bg-[#0F1210] relative overflow-hidden">
      {/* Mobile gradient bg */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          background: "radial-gradient(93.32% 155.38% at 80% 20%, rgba(9, 179, 9, 0.08) 0%, rgba(9, 179, 9, 0) 60%), radial-gradient(102.02% 169.87% at 10% 80%, rgba(9, 179, 9, 0.05) 0%, rgba(9, 179, 9, 0) 50%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-5 md:px-10 lg:px-[58px] py-6 lg:py-20">
        <div className="flex-1 flex flex-col gap-[10px] lg:gap-4">
          {/* Badge */}
          <motion.div
            className="flex items-center gap-[5px] lg:gap-2 px-[11px] lg:px-4 py-1 lg:py-1.5 w-fit bg-[#09B309]/10 border border-[#09B309]/20 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.17v11.66M1.17 7h11.66" stroke="#09B309" strokeWidth="1.17" strokeLinecap="round" />
            </svg>
            <span className="text-[8px] lg:text-xs font-semibold tracking-[0.2px] lg:tracking-[0.3px] uppercase text-[#09B309]">
              Now Live in Port Harcourt
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-[34px] lg:text-[60px] font-extrabold leading-[34px] lg:leading-[1] text-[#171C1A] dark:text-white font-[family-name:var(--font-rethink)]">
              Smart Waste{"\n"}Management for a
            </h1>
            <div className="relative w-fit mt-1 lg:mt-2 pb-[10px] lg:pb-[12px]">
              <span className="text-[34px] lg:text-[60px] font-extrabold leading-[41px] lg:leading-[1] text-[#09B309] font-[family-name:var(--font-jakarta)]">
                Cleaner Future
              </span>
              <svg className="absolute bottom-0 left-0 w-full" height="17" viewBox="0 0 432 17" fill="none">
                <path d="M3 10C100 3 330 3 429 10" stroke="#09B309" strokeWidth="4.3" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="max-w-[340px] lg:max-w-[512px] text-[14px] lg:text-lg leading-[22px] lg:leading-[29px] text-[#6D7873] mt-0 lg:mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WasteWise connects households and businesses with verified waste vendors for reliable, eco-friendly collection and recycling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-[11px] lg:gap-4 mt-2 lg:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="/waitlist"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-[11px] lg:gap-4 px-[22px] lg:px-8 h-[33px] lg:h-12 bg-[#09B309] text-white text-[11px] lg:text-base font-semibold rounded-full shadow-[0px_7px_10px_-2px_rgba(9,179,9,0.25),0px_3px_4px_-3px_rgba(9,179,9,0.25)]"
            >
              Join Vendor Waitlist
              <ArrowRight size={11} className="lg:w-4 lg:h-4" />
            </motion.a>
            <motion.button
              onClick={() => setDemoOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-[11px] lg:gap-4 px-[22px] lg:px-8 h-[33px] lg:h-12 bg-transparent border border-[#D3DAD3] lg:border-[#E3E8E3] dark:border-white/20 text-[#171C1A] dark:text-white text-[11px] lg:text-base font-medium rounded-full shadow-[0px_1px_1.4px_rgba(0,0,0,0.05)]"
            >
              <PlayFilledAlt size={11} className="text-[#171C1A] dark:text-white lg:w-4 lg:h-4" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Store Buttons */}
          <motion.div
            className="flex items-center gap-[11px] lg:gap-4 mt-2 lg:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-[5.5px] lg:gap-2 px-[11px] lg:px-4 py-[7px] lg:py-2.5 bg-[#171C1A] rounded-[8px] lg:rounded-xl"
            >
              <Image src="/images/ww-apple.png" alt="Apple" width={14} height={14} className="lg:w-5 lg:h-5" />
              <div className="flex flex-col">
                <span className="text-[7px] lg:text-[10px] text-white/80 leading-[7px] lg:leading-[10px]">Download on the</span>
                <span className="text-[10px] lg:text-sm font-semibold text-white leading-[13px] lg:leading-[18px]">App Store</span>
              </div>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-[5.5px] lg:gap-2 px-[11px] lg:px-4 py-[7px] lg:py-2.5 bg-[#171C1A] rounded-[8px] lg:rounded-xl"
            >
              <Image src="/images/ww-playstore.png" alt="Google Play" width={14} height={14} className="lg:w-5 lg:h-5" />
              <div className="flex flex-col">
                <span className="text-[7px] lg:text-[10px] text-white/80 leading-[7px] lg:leading-[10px]">Get it on</span>
                <span className="text-[10px] lg:text-sm font-semibold text-white leading-[13px] lg:leading-[18px]">Google Play</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Avatar Stack + Early Users */}
          <motion.div
            className="flex items-center gap-4 lg:gap-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center">
              {avatars.map((letter, i) => (
                <div
                  key={letter}
                  className="w-[28px] h-[28px] lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-[8px] lg:text-xs font-bold text-white border border-white"
                  style={{
                    background: "linear-gradient(135deg, rgba(9,179,9,0.3) 0%, rgba(9,179,9,0.6) 100%)",
                    marginLeft: i > 0 ? "-8px" : 0,
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] lg:text-sm font-semibold text-[#171C1A] dark:text-white">2,000+ Early Users</span>
              <span className="text-[8px] lg:text-xs text-[#6D7873]">Joined the waitlist</span>
            </div>
          </motion.div>
        </div>

        {/* App Image */}
        <motion.div
          className="flex justify-center w-full lg:flex-1"
          initial={{ opacity: 0, x: 0, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[308px] lg:max-w-[448px]">
            <div
              className="absolute -inset-[11px] lg:-inset-4 rounded-[17px] lg:rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(9,179,9,0.2) 0%, rgba(9,179,9,0.05) 100%)",
                filter: "blur(14px)",
              }}
            />
            <Image
              src="/images/hero-app.png"
              alt="WasteWise App Interface"
              width={448}
              height={614}
              className="relative z-10 rounded-[14px] lg:rounded-3xl w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Watch Demo Modal */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              onClick={closeDemo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
              className="relative w-full max-w-[960px] aspect-video"
              initial={{ scale: 0.9, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 12, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
            >
              {/* Glow */}
              <div
                className="absolute -inset-2 rounded-[24px] pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(9,179,9,0.35) 0%, rgba(9,179,9,0.05) 100%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Close button */}
              <motion.button
                onClick={closeDemo}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-[#171C1A] shadow-lg"
                aria-label="Close demo video"
              >
                <Close size={20} />
              </motion.button>

              {/* Video frame */}
              <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden bg-black ring-1 ring-white/10 shadow-2xl">
                <video
                  ref={videoRef}
                  src="/videos/demo.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
