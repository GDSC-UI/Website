import { PropsWithChildren, ReactNode } from "react"
import { RotatedImage } from "./rotated-image"

export function FlexContainer({
  heading,
  period,
  children,
}: PropsWithChildren & {
  heading: string
  period: string
}) {
  return (
    <div className="flex gap-16 bg-lightblue px-[7.5rem] items-center justify-center">
      <div className="space-y-5 py-[7.5rem]">
        <h1 className="capitalize">{heading}</h1>
        <span className="inline-block font-bold">{period}</span>
        {children}
      </div>
      <div className="isolate">
        <RotatedImage />
      </div>
    </div>
  )
}

export const CenteredBox = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center">{children}</div>
)
