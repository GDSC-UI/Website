import Image, { StaticImageData } from "next/image";

const SpeakerCard = ({ name, src, role }: { name: string; src: StaticImageData, role?: string }) => {
  return (
    <div className="text-center flex justify-center items-center flex-col p-5">
      <div className="rounded-[50%] w-36 h-36 mx-auto">
        <Image
          src={src}
          alt={`${name}ʼs cover photo`}
          quality={100}
          placeholder="blur"
          className="rounded-[7.5rem]"
        />
      </div>
      <h4 className="font-bold  pt-4">{name}</h4>
      <p className="font-light ">{role}</p>
    </div>
  );
};

export default SpeakerCard;
