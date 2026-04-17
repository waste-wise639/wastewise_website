import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white shadow-md hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",
        secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        "on-dark": "bg-white text-gray-900 shadow-md hover:bg-gray-100 hover:shadow-lg",
        outline: "border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white",
        ghost: "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
      },
      size: { default: "h-11 px-8 py-2", sm: "h-9 px-6 text-xs", lg: "h-12 px-10 text-base" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }

export default function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
