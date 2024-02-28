import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = ({
  children,
  content,
  heading,
  className,
}: PropsWithChildren & {
  heading: string
  content?: string
  className?: string
}) => (
  <section
    className={cn(
      `space-y-10 text-center md:px-[7.5rem] px-5 py-20`,
      className
    )}
  >
    {content && <p className="font-medium">{content}</p>}
    <h1 className="text-3xl md:text-5xl capitalize">{heading}</h1>
    {children}
  </section>
)
