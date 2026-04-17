"use client"
import * as React from "react"
import Link from "next/link"
import Button from "@/components/ui/Button"
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils"

interface NavbarProps { logo: string; menuItems: { label: string; href: string }[]; ctaText?: string; ctaHref?: string; variant?: "light" | "dark" | "transparent" }

export default function Navbar({ logo, menuItems, ctaText, ctaHref, variant = "light" }: NavbarProps) {
  const [open, setOpen] = React.useState(false)
  const v = {
    light: { nav: "bg-white/95 backdrop-blur-md border-b border-gray-200", logo: "text-gray-900", link: "text-gray-700 hover:text-gray-900", mobile: "bg-white" },
    dark: { nav: "bg-gray-900/95 backdrop-blur-md border-b border-gray-800", logo: "text-white", link: "text-gray-300 hover:text-white", mobile: "bg-gray-900" },
    transparent: { nav: "bg-black/20 backdrop-blur-md border-b border-white/10", logo: "text-white", link: "text-white/80 hover:text-white", mobile: "bg-black/90" },
  }[variant]
  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50", v.nav)}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className={cn("text-2xl font-bold", v.logo)}>{logo}</Link>
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (<Link key={item.href} href={item.href} className={cn("transition-colors", v.link)}>{item.label}</Link>))}
            {ctaText && ctaHref && <Button asChild><Link href={ctaHref}>{ctaText}</Link></Button>}
          </div>
          <button className={cn("md:hidden", v.logo)} onClick={() => setOpen(!open)}>{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
        {open && (
          <div className={cn("md:hidden mt-4 pb-4 flex flex-col gap-4", v.mobile)}>
            {menuItems.map((item) => (<Link key={item.href} href={item.href} className={cn("transition-colors", v.link)} onClick={() => setOpen(false)}>{item.label}</Link>))}
            {ctaText && ctaHref && <Button asChild className="w-full"><Link href={ctaHref}>{ctaText}</Link></Button>}
          </div>
        )}
      </div>
    </nav>
  )
}
