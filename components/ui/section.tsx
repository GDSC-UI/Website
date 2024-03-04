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
    className={cn(`space-y-8 mx-8 md:mx-[7.5rem] py-10 text-center`, className)}
  >
    <div className="space-y-5">
      {content && <p className="font-medium">{content}</p>}
      <h2 className="capitalize">{heading}</h2>
    </div>
    <div className="text-grey space-y-10">{children}</div>
  </section>
)
