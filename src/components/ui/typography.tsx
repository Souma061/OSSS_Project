import { cn } from "@/lib/utils"
import * as React from "react"

const textVariants = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
}

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: keyof typeof textVariants
  as?: React.ElementType
}

export function Typography({
  className,
  variant = "p",
  as,
  ...props
}: TypographyProps) {
  const Component = (as || (variant.startsWith("h") ? variant : "p")) as React.ElementType

  return (
    <Component
      className={cn(textVariants[variant], className)}
      {...props}
    />
  )
}
