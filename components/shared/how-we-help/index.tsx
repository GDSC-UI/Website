interface HowWeHelpProps {
  textOne: string;
  textTwo: string;
  textThree?: string;
}

const HowWeHelp = ({ textOne, textTwo, textThree }: HowWeHelpProps) => {
  return (
    <div className="text-center p-28 font-primary">
      <div className="w-full h-80 bg-lightblue"></div>
      <h2 className="text-base mt-10">How does GDSC help?</h2>
      <h3 className="max-w-xl mx-auto pt-10 text-5xl">
        Developer Student Club University of Ibadan
      </h3>
      <div className="max-w-3xl mx-auto mt-10">
        <p>{textOne}</p>
        <p>{textTwo}</p>
      </div>
    </div>
  );
};

export default HowWeHelp;
