import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  route: string;
  classnames?: any;
}
const ProgramCard = ({
  title,
  description,
  route,
  classnames,
}: ProgramCardProps) => {
  return (
    <div className={`w-full md:w-[36.5rem] bg-white ${classnames}`}>
      <div className="bg-lightgrey w-full h-[254px]"></div>
      <div className="p-5">
        <h3 className="pt-5 text-2xl">{title}</h3>
        <p className="pt-5">{description}</p>

        <h3 className="font-bold font-primary pt-5 text-2xl">{title}</h3>
        <p className="font-primary font-light py-5">{description}</p>
        <Link
          href={route}
          className="font-primary font-normal text-base pt-8 hover:text-blue duration-100 transition-all"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
