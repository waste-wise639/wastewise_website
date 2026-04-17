"use client"
import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface Stat { value: number; suffix?: string; prefix?: string; label: string; icon?: React.ReactNode }
interface StatsCounterProps { stats: Stat[]; className?: string; duration?: number }

function AnimatedNumber({ value, duration = 2000, prefix = "", suffix = "" }: { value: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); observer.disconnect() } }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!isVisible) return
    const numVal = typeof value === 'string' ? parseFloat(value) || 0 : value
    if (numVal <= 0) { setCount(numVal); return }
    const isDecimal = numVal % 1 !== 0
    const mult = isDecimal ? 10 : 1
    const target = Math.round(numVal * mult)
    let cur = 0
    const steps = Math.min(target, 60)
    const inc = target / steps
    const stepMs = duration / steps
    const timer = setInterval(() => {
      cur += inc
      if (cur >= target) { setCount(numVal); clearInterval(timer) }
      else { setCount(isDecimal ? Math.round(cur) / mult : Math.floor(cur)) }
    }, stepMs)
    return () => clearInterval(timer)
  }, [isVisible, value, duration])
  const display = typeof count === 'number' && count % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()
  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

export default function StatsCounter({ stats, className, duration = 2000 }: StatsCounterProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8", className)}>
      {stats.map((s, i) => (
        <div key={i} className="text-center p-4 sm:p-2">
          {s.icon && <div className="flex justify-center mb-2 sm:mb-3">{s.icon}</div>}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2"><AnimatedNumber value={s.value} duration={duration} prefix={s.prefix} suffix={s.suffix} /></div>
          <div className="text-sm sm:text-base text-muted-foreground font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
