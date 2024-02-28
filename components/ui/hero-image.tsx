import Image from "next/image"
import heroSrc from "public/gdsc-hero.jpg"

export function HeroImage() {
  return (
    <div className="lg:mx-[7.5rem] my-20">
      <Image
        src={heroSrc}
        alt="hero image with GDSC UI as text in a white background box on a yellow patterned background"
        quality={100}
        priority
        placeholder="blur"
      />
    </div>
  )
}
