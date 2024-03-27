import { TwobyTwoGrid } from "../grid-container"
import Image1 from "./images/image_1.jpg"
import Image2 from "./images/image_2.jpg"
import Image3 from "./images/image_3.jpg"
import Image4 from "./images/image_4.jpg"
import Image5 from "./images/image_5.jpg"
import Image6 from "./images/image_6.jpg"
import Image7 from "./images/image_7.jpg"
import Image8 from "./images/image_8.jpg"
import Image9 from "./images/image_9.jpg"
import Image10 from "./images/image_10.jpg"
import Image11 from "./images/image_11.jpg"
import Image12 from "./images/image_12.jpg"
import Image13 from "./images/image_13.jpg"
import Image14 from "./images/image_14.jpg"

import { MyImage } from "../image"

const IMAGES = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
]
export function HalfGallery() {
  return (
    <TwobyTwoGrid>
      {IMAGES.slice(0, 6).map((image) => (
        <MyImage
          key={crypto.randomUUID()}
          src={image}
          alt="attendees and organisers during a GDSC UI event"
        />
      ))}
    </TwobyTwoGrid>
  )
}

export function Gallery() {
  return (
    <>
      <HalfGallery />
      <TwobyTwoGrid>
        {IMAGES.slice(6).map((image) => (
          <MyImage
            key={crypto.randomUUID()}
            src={image}
            alt="attendees and organisers during a GDSC UI event"
          />
        ))}
      </TwobyTwoGrid>
    </>
  )
}
