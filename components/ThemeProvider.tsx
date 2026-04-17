"use client"
import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
type Theme = "dark" | "light"
interface ThemeContextType { theme: Theme; toggleTheme: () => void }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
interface ThemeProviderProps { children: React.ReactNode; defaultTheme?: Theme }
export default function ThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true); const s = localStorage.getItem("theme") as Theme | null; if (s) setTheme(s) }, [])
  useEffect(() => { if (!mounted) return; document.documentElement.classList.remove("dark", "light"); document.documentElement.classList.add(theme); localStorage.setItem("theme", theme) }, [theme, mounted])
  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"))
  if (!mounted) return <div className="bg-background text-foreground">{children}</div>
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
