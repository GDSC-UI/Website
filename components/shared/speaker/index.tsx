import { MyImage } from "@/components/ui/image"
import { StaticImageData } from "next/image"

const SpeakerCard = ({
  name,
  src,
  title,
}: {
  name: string
  src: StaticImageData | string
  title?: string
}) => {
  const alt = title ? `${title}, ${name}ʼs headshot` : `${name}ʼs headshot`
  return (
    <div className="text-center p-5 text-black flex flex-col justify-center items-center">
      <div className=" rounded-[50%] w-36 h-36 mx-auto">
        <MyImage
          src={src}
          alt={alt}
          quality={100}
          placeholder="blur"
          className="rounded-[7.5rem]"
        />
      </div>
      <h4 className="pt-4">{name}</h4>
      <p className="font-light text-base text-balance">{title || `Software Engineer`}</p>
    </div>
  )
}

export default SpeakerCard
