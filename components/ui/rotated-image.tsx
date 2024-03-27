import { MyImage } from "./image"
import { StaticImageData } from "next/image"

export function RotatedImage({
  imageProp,
}: {
  imageProp: { alt: string; src: StaticImageData }
}) {
  return (
    <div
      className="rotated-image-wrapper relative before:absolute before:inset-0 before:border-yellow before:border-2 before:-rotate-[4.288deg] after:absolute after:inset-0 after:border-green after:border after:rotate-[10.503deg] md:size-[400px] md:m-20 my-10 before:-z-10 after:-z-20 md:after:size-96 md:before:size-96"
      style={{
        backgroundImage: `url(${imageProp.src.src})`,
        backgroundSize: 0,
      }}
    >
      <MyImage
        alt={imageProp.alt}
        src={imageProp.src}
        className="object-cover w-full h-full border-2 border-blue"
        priority
      />
    </div>
  )
}
