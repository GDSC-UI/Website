import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  route: string;
  date?: Date;
}
const ProgramCard = ({ title, description, route, date }: ProgramCardProps) => {
  return (
    <div className="w-[550px] bg-white">
      <div className="bg-lightgrey w-[550px] h-[250px]"></div>
      <div className="p-5">
        <p className="text-blue font-primary font-light">
          Upcoming {new Date().toLocaleDateString()}
        </p>
        <h3 className="font-bold font-primary pt-5 text-2xl">{title}</h3>
        <p className="font-primary font-light pt-5">{description}</p>
        <Link href={route} className="font-primary font-normal text-base mt-4">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
