import Image, { StaticImageData } from "next/image"

const SpeakerCard = ({ name, src }: { name: string; src: StaticImageData }) => {
  return (
    <div className="text-center p-5">
      <div className="bg-lightgrey rounded-[50%] w-36 h-36 mx-auto">
        <Image
          src={src}
          alt={`${name}ʼs cover photo`}
          quality={100}
          placeholder="blur"
          className="rounded-[7.5rem]"
        />
      </div>
      <h4 className="font-bold  pt-4">{name}</h4>
      <p className="font-light ">Software Engineer</p>
    </div>
  )
}

export default SpeakerCard
