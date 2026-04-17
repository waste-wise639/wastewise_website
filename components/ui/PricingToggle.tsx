"use client"
import * as React from "react"
import { useState } from "react"
import { Check } from 'lucide-react';
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

interface PricingPlan { name: string; description: string; monthlyPrice: number; yearlyPrice: number; features: string[]; cta: string; popular?: boolean }
interface PricingToggleProps { plans: PricingPlan[]; className?: string }

export default function PricingToggle({ plans, className }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false)
  return (
    <div className={cn("", className)}>
      <div className="flex justify-center mb-12">
        <div className="bg-muted p-1 rounded-full inline-flex">
          <button onClick={() => setIsYearly(false)} className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all", !isYearly ? "bg-gray-900 text-white shadow-md dark:bg-white dark:text-gray-900" : "text-gray-500 dark:text-gray-400")}>Monthly</button>
          <button onClick={() => setIsYearly(true)} className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all", isYearly ? "bg-gray-900 text-white shadow-md dark:bg-white dark:text-gray-900" : "text-gray-500 dark:text-gray-400")}>Yearly <span className="text-xs opacity-75">Save 20%</span></button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className={cn("rounded-2xl p-8 transition-all duration-300", p.popular ? "bg-gray-900 text-white scale-105 shadow-2xl ring-2 ring-gray-900" : "bg-white border border-gray-200 shadow-lg")}>
            {p.popular && <div className="text-xs font-semibold uppercase tracking-wide mb-4 text-gray-300">Most Popular</div>}
            <h3 className={cn("text-xl font-bold mb-2", p.popular ? "text-white" : "text-gray-900")}>{p.name}</h3>
            <p className={cn("text-sm mb-6", p.popular ? "text-gray-300" : "text-gray-600")}>{p.description}</p>
            <div className="mb-6"><span className={cn("text-4xl font-bold", p.popular ? "text-white" : "text-gray-900")}>${isYearly ? p.yearlyPrice : p.monthlyPrice}</span><span className={cn("text-sm", p.popular ? "text-gray-400" : "text-gray-500")}>/{isYearly ? "year" : "month"}</span></div>
            <ul className="space-y-3 mb-8">{p.features.map((f, j) => <li key={j} className="flex items-center gap-3"><Check className={cn("w-5 h-5", p.popular ? "text-emerald-400" : "text-emerald-600")} /><span className={cn("text-sm", p.popular ? "text-gray-200" : "text-gray-700")}>{f}</span></li>)}</ul>
            <Button variant={p.popular ? "secondary" : "default"} className="w-full">{p.cta}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
