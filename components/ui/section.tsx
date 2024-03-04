import { cn } from "@/lib/utils"
import { PropsWithChildren, ReactNode } from "react"

export const Section = ({
  children,
  content,
  heading,
  className,
}: PropsWithChildren & {
  heading: string
  content?: string | ReactNode
  className?: string
}) => (
  <section
    className={cn(
      `space-y-8 text-center md:px-[7.5rem] md:max-w-5xl mx-auto px-5 py-10`,
      className
    )}
  >
    <div className="space-y-5">
      {content && <p className="font-medium">{content}</p>}
      <h2 className="capitalize">{heading}</h2>
    </div>
    <div className="text-grey space-y-4">{children}</div>
  </section>
)
