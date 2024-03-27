import { PropsWithChildren } from "react"
import { RotatedImage } from "./rotated-image"
import { StaticImageData } from "next/image"

export function FlexContainer({
  heading,
  period,
  children,
  imageProp,
}: PropsWithChildren & {
  heading: string
  period: string
  imageProp: {
    alt: string
    src: StaticImageData
  }
}) {
  return (
    <div className="flex gap-16 bg-lightblue px-8 md:px-[7.5rem] items-center justify-center max-lg:flex-wrap">
      <div className="space-y-5 py-8 md:py-[7.5rem]">
        <h1 className="capitalize">{heading}</h1>
        <span className="inline-block font-bold">{period}</span>
        {children}
      </div>
      <div className="isolate max-lg:-order-1 lg:max-w-[50%]">
        <RotatedImage imageProp={imageProp} />
      </div>
    </div>
  )
}
