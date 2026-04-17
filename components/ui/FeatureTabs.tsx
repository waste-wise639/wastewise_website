"use client"
import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface Feature { id: string; title: string; description: string; icon?: React.ReactNode; image?: string; bullets?: string[] }
interface FeatureTabsProps { features: Feature[]; className?: string }

export default function FeatureTabs({ features, className }: FeatureTabsProps) {
  const [activeTab, setActiveTab] = useState(features[0]?.id || "")
  const active = features.find(f => f.id === activeTab) || features[0]
  return (
    <div className={cn("", className)}>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {features.map((f) => (
          <button key={f.id} onClick={() => setActiveTab(f.id)} className={cn("px-6 py-3 rounded-full font-medium transition-all", activeTab === f.id ? "bg-gray-900 text-white shadow-lg dark:bg-white dark:text-gray-900" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700")}>
            <span className="flex items-center gap-2">{f.icon}{f.title}</span>
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">{active.title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{active.description}</p>
          {active.bullets && <ul className="space-y-3">{active.bullets.map((b, i) => <li key={i} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-600" /><span className="text-gray-700">{b}</span></li>)}</ul>}
        </div>
        {active.image && <div className="relative"><div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" /><img src={active.image} alt={active.title} className="relative rounded-2xl shadow-2xl w-full" /></div>}
      </div>
    </div>
  )
}
