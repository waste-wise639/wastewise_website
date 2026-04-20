"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Close, Light, Moon } from "@carbon/icons-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Benefits", href: "/#benefits" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Pricing", href: "/#pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0F1210]/90 backdrop-blur-[4px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Desktop */}
        <div className="hidden md:flex max-w-[1400px] mx-auto items-center justify-between h-[80px] px-6 md:px-10 lg:px-[58px]">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/wastewise-logo.jpg"
              alt="WasteWise"
              width={42}
              height={42}
              className="rounded-full"
            />
            <span className="text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-[#171C1A] dark:text-white font-[family-name:var(--font-rethink)]">
              Waste<span className="text-[#09B309]">Wise</span>
            </span>
          </a>

          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ backgroundColor: active ? undefined : "rgba(11,174,11,0.05)" }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#09B309]/10 text-[#09B309]"
                      : "text-[#6D7873]"
                  }`}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F0F5F0] dark:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Light size={18} className="text-[#09B309]" />
              ) : (
                <Moon size={18} className="text-[#171C1A]" />
              )}
            </motion.button>

            <motion.a
              href="/waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-[7.6px] bg-[#09B309] text-white text-xs font-medium rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
            >
              Join Waitlist
            </motion.a>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between h-[68px] px-5">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/wastewise-logo.jpg"
              alt="WasteWise"
              width={42}
              height={42}
              className="rounded-full"
            />
            <span className="text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-[#171C1A] dark:text-white font-[family-name:var(--font-rethink)]">
              Waste<span className="text-[#09B309]">Wise</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-5 h-5 flex items-center justify-center"
            >
              {theme === "dark" ? (
                <Light size={20} className="text-[#09B309]" />
              ) : (
                <Moon size={20} className="text-[#4A5565]" />
              )}
            </button>

            {/* Search Icon */}
            <button className="w-5 h-5 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 2.5C5.41 2.5 2.5 5.41 2.5 9C2.5 12.59 5.41 15.5 9 15.5C10.59 15.5 12.04 14.93 13.17 14L16.59 17.41C16.78 17.6 17.03 17.7 17.29 17.7C17.55 17.7 17.8 17.6 17.99 17.41C18.38 17.02 18.38 16.39 17.99 16L14.58 12.59C15.49 11.35 16.03 9.84 16.03 8.2C15.5 5.41 12.59 2.5 9 2.5ZM9 14C6.24 14 4 11.76 4 9C4 6.24 6.24 4 9 4C11.76 4 14 6.24 14 9C14 11.76 11.76 14 9 14Z" fill="#4A5565" stroke="#4A5565" strokeWidth="0.2"/>
              </svg>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-5 h-5 flex flex-col justify-center items-center gap-[5px]"
            >
              <span className="w-[15px] h-[1.2px] bg-[#4A5565] rounded-full" />
              <span className="w-[15px] h-[1.2px] bg-[#4A5565] rounded-full" />
              <span className="w-[15px] h-[1.2px] bg-[#4A5565] rounded-full" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-[60]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[280px] h-full bg-white dark:bg-[#171C1A] z-[70] flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[18px] font-bold text-[#171C1A] dark:text-white font-[family-name:var(--font-rethink)]">
                  Menu
                </span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <Close size={24} className="text-[#171C1A] dark:text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                        active
                          ? "bg-[#09B309]/10 text-[#09B309]"
                          : "text-[#6D7873] hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto">
                <a
                  href="/waitlist"
                  className="flex items-center justify-center w-full h-[44px] bg-[#09B309] text-white text-[14px] font-semibold rounded-full"
                >
                  Join Waitlist
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
