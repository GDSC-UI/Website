import Link from "next/link";
import { MyImage } from "../image";
import { ImageProps } from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  image?: any;
  route: string;
  classnames?: any;
}
const EventsCards = ({
  title,
  description,
  image,
  route,
  classnames,
}: ProgramCardProps) => {
  return (
    <div
      className={`w-full md:w-[24.2rem] p-3 bg-white border border-lightgrey ${classnames}`}
    >
      <MyImage
        alt="a photo of two of the volunteers, a male and a female, at the TechQuest event"
        src={image}
        className="object-cover w-full h-full"
        priority
      />
      <div className="py-4">
        <p className="text-blue font-light">
          {new Date().toLocaleDateString()}
        </p>
        <h3 className="font-bold pt-5 text-2xl">{title}</h3>
        <p className="font-light py-4 text-grey">{description}</p>
        <Link
          href={route}
          className="font-normal text-base text-blue pt-8 hover:font-bold duration-100 transition-all"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default EventsCards;
