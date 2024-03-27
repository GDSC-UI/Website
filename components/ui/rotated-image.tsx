import { cn } from "@/lib/utils"
import { MyImage } from "./image"
import { StaticImageData } from "next/image"

export function RotatedImage({ src }: { src: StaticImageData }) {
  return (
    <div
      className={cn(
        `rotated-image-wrapper relative before:absolute before:inset-0 before:border-yellow before:border-2 before:-rotate-[4.288deg] after:absolute after:inset-0 after:border-green after:border after:rotate-[10.503deg] md:size-[400px] md:m-20 my-10 before:-z-10 after:-z-20 md:after:size-96 before:size-96`
      )}
      style={{ backgroundImage: `url(${src.src})`, backgroundSize: `0` }}
    >
      <MyImage
        alt="a photo of two of the volunteers, a male and a female, at the TechQuest event"
        src={src}
        className="object-cover w-full h-full border-2 border-blue"
        priority
      />
    </div>
  )
}
