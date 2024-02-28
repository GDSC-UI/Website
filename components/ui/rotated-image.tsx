import { MyImage } from "./image"
import demoSrc from "./gallery/images/image_1.jpg"

export function RotatedImage() {
  return (
    <div className="relative before:absolute before:inset-0 before:border-yellow before:border-2 before:-rotate-[4.288deg] after:absolute after:inset-0 after:border-green after:border after:rotate-[10.503deg] size-[400px] m-20 mx-40 before:bg-lightgrey before:-z-10 after:-z-20 after:size-96 before:sie-96">
      <MyImage
        alt="a photo of two of the volunteers, a male and a female, at the TechQuest event"
        src={demoSrc}
        className="object-cover w-full h-full border-2 border-blue"
        priority
      />
    </div>
  )
}
