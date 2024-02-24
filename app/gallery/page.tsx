import Button from "@/components/ui/Button"
import { TwobyTwoGrid } from "@/components/ui/grid-container"
import { HeroImage } from "@/components/ui/hero-image"
import { Section } from "@/components/ui/section"
import Image from "next/image"
import Image1 from "./images/image_1.jpg"
import Image2 from "./images/image_2.jpg"
import Image3 from "./images/image_3.jpg"
import Image4 from "./images/image_4.jpg"
import Image5 from "./images/image_5.jpg"
import Image6 from "./images/image_6.jpg"

const IMAGES = [Image1, Image2, Image3, Image4, Image5, Image6]

export default function Page() {
  return (
    <div>
      <HeroImage />
      <Section heading="our gallery" content="Feed your eyes">
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu.
        </p>
      </Section>
      <section className="mx-[7.5rem] space-y-10 mb-20">
        <Gallery />
        <div className="text-center">
          <Button variant="outline">See more photos</Button>
        </div>
      </section>
    </div>
  )
}

async function Gallery() {
  return (
    <TwobyTwoGrid>
      {IMAGES.map((image) => (
        <Image
          key={crypto.randomUUID()}
          src={image}
          alt="Photo of attendees during a GDSC UI program"
          placeholder="blur"
          quality={100}
        />
      ))}
    </TwobyTwoGrid>
  )
}
