"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from "@/lib/utils"

interface Testimonial { quote: string; author: string; role: string; company?: string; avatar?: string; rating?: number }
interface TestimonialCarouselProps { testimonials: Testimonial[]; autoPlay?: boolean; interval?: number; className?: string }

export default function TestimonialCarousel({ testimonials, autoPlay = true, interval = 5000, className }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, testimonials.length])
  const next = () => setCurrent((p) => (p + 1) % testimonials.length)
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {testimonials.map((t, i) => (
          <div key={i} className="w-full flex-shrink-0 px-4">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              {t.rating && <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>}
              <blockquote className="text-lg md:text-xl text-gray-900 mb-6 leading-relaxed">"{t.quote}"</blockquote>
              <div className="flex items-center gap-4">
                {t.avatar && <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover" />}
                <div><div className="font-semibold text-gray-900">{t.author}</div><div className="text-sm text-gray-600">{t.role}{t.company && ` at ${t.company}`}</div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button onClick={prev} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><ChevronLeft className="w-5 h-5 text-gray-700" /></button>
        <div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={cn("w-2 h-2 rounded-full transition-all", current === i ? "bg-gray-900 w-6" : "bg-gray-300")} />)}</div>
        <button onClick={next} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><ChevronRight className="w-5 h-5 text-gray-700" /></button>
      </div>
    </div>
  )
}
