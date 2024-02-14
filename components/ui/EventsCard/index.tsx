import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  route: string;
  classnames?: any;
}
const EventsCards = ({ title, description, route,  classnames }: ProgramCardProps) => {
  return (     <div className={`w-full md:w-[24rem] bg-white ${classnames}`}>
  <div className="bg-lightgrey w-full h-[250px]"></div>
  <div className="p-5">
    <p className="text-blue font-primary font-light">
  {(' Upcoming ' + new Date().toLocaleDateString())}
    </p>
    <h3 className="font-bold font-primary pt-5 text-2xl">{title}</h3>
    <p className="font-primary font-light py-5">{description}</p>
    <Link href={route} className="font-primary font-normal text-base pt-8 hover:text-blue duration-100 transition-all">
      Read more
    </Link>
  </div>
</div> );
}
 
export default EventsCards;