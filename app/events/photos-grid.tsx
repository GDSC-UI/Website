import { MyImage } from "@/components/ui/image"
import imageOne from "./images/1.jpg"
import imageTwo from "./images/2.jpg"
import imageThree from "./images/3.jpg"
import imageFour from "./images/4.jpg"

export function PhotosGrid() {
  return (
    <aside className="mt-20 grid-cols-1 grid min-[900px]:grid-cols-2 justify-center mx-8 md:mx-[7.5rem] gap-5">
      <div>
        <MyImage
          src={imageOne}
          alt="photo  taken during the TechQuest  event"
        />
      </div>
      <div>
        <MyImage
          src={imageTwo}
          alt="photo  taken during the TechQuest  event"
          className="mb-5"
        />
        <div className="grid grid-cols-2 gap-5">
          <MyImage
            src={imageThree}
            alt="photo  taken during the TechQuest  event"
          />
          <MyImage
            src={imageFour}
            alt="photo  taken during the TechQuest  event"
          />
        </div>
      </div>
    </aside>
  )
}
