import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  route: string;
  classnames?: any;
}
const EventsCards = ({
  title,
  description,
  route,
  classnames,
}: ProgramCardProps) => {
  return (
    <div className={`w-full md:w-[24rem] bg-white ${classnames}`}>
      <div className="bg-lightgrey w-full h-[250px]"></div>
      <div className="p-5 h-[350px]">
        <p className="text-blue font-light">
          {  new Date().toLocaleDateString()}
        </p>
        <h3 className="font-bold pt-5 text-2xl">{title}</h3>
        <p className="font-light py-5">{description}</p>
        <Link
          href={route}
          className="font-normal text-base text-blue pt-8 hover:font-bold duration-100 transition-all"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default EventsCards;
