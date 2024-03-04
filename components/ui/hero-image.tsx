import Image from "next/image"
import heroSrc from "public/gdsc-hero.jpg"

export function HeroImage() {
  return (
    <div className="mx-8 lg:mx-[7.5rem] md:my-20 my-10">
      <Image
        src={heroSrc}
        alt="hero image with GDSC UI as text in a white background box on a yellow patterned background"
        quality={100}
        priority
        placeholder="blur"
        className="w-full h-full"
      />
    </div>
  )
}
