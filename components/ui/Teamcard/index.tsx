interface TeamCardProps {
  name: string;
  description: string;
  role: string;
  github?: any;
  twitter?: any;
  portfolio?: any;
  linkedIn?: any;
  image: string;
}

const TeamCard = ({
  name,
  role,
  description,
  github,
  twitter,
  portfolio,
  linkedIn,
  image,
}: TeamCardProps) => {
  return (
    <div className="flex flex-wrap-reverse gap-4 md:w-[36rem] mx-auto p-5">
      <div className="max-w-60">
        <h2 className="text-2xl md:text-3xl max-w-56">{name}</h2>
        <p className="text-2xl my-5">{role}</p>
        <p className="text-base">{description}</p>

        <div className="flex mt-4 gap-4">
          <img
            className="rounded-[50%] bg-lightgrey"
            width={50}
            height={50}
            src={github}
            alt=""
          />
          <img
            className="rounded-[50%] bg-lightgrey"
            width={50}
            height={50}
            src={twitter}
            alt=""
          />
          <img
            className="rounded-[50%] bg-lightgrey"
            width={50}
            height={50}
            src={portfolio}
            alt=""
          />
        </div>
      </div>

      <div className="md:w-[280px] w-full h-[340px] bg-lightgrey rounded-3xl"></div>
    </div>
  );
};

export default TeamCard;
