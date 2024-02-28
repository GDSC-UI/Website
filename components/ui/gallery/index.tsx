import { TwobyTwoGrid } from "../grid-container"
import Image1 from "./images/image_1.jpg"
import Image2 from "./images/image_2.jpg"
import Image3 from "./images/image_3.jpg"
import Image4 from "./images/image_4.jpg"
import Image5 from "./images/image_5.jpg"
import Image6 from "./images/image_6.jpg"
import { MyImage } from "../image"

const IMAGES = [Image1, Image2, Image3, Image4, Image5, Image6]

export function Gallery() {
  return (
    <TwobyTwoGrid>
      {IMAGES.map((image) => (
        <MyImage
          key={crypto.randomUUID()}
          src={image}
          alt="Photo of attendees during a GDSC UI program"
        />
      ))}
    </TwobyTwoGrid>
  )
}
