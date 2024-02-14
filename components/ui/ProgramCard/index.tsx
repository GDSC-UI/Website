interface ProgramCardProps {
  title: string;
  description: string;
}
const ProgramCard = ({ title, description }: ProgramCardProps) => {
  return (
    <div className="w-[550px] bg-white">
      <div className="bg-lightgrey w-[550px] h-[250px]"></div>
      <div className="p-5">
        <h3 className="pt-5 text-2xl">{title}</h3>
        <p className="pt-5">{description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
