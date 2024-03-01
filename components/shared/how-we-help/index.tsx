import { HeroImage } from "@/components/ui/hero-image";

interface HowWeHelpProps {
  textOne: string;
  textTwo?: string;
}

const HowWeHelp = ({ textOne, textTwo }: HowWeHelpProps) => {
  return (
    <div className="text-center md:py-4 ">
      <HeroImage />
      <h2 className="text-base  font-bold -mt-5">How does GDSC help?</h2>
      <h3 className="max-w-2xl mx-auto pt-10 text-2xl md:text-4xl">
        Google Developer Student Clubs, University of Ibadan
      </h3>
      <div className="max-w-3xl mx-auto mt-5 px-5">
        <p className="font-light text-grey pt-6">{textOne}</p>
        <p className="font-light text-grey pt-6">{textTwo}</p>
      </div>
    </div>
  );
};

export default HowWeHelp;
