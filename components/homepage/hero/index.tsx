import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="flex p-28 items-center gap-5 bg-lightblue">
      <div className="left max-w-2xl">
        <h1 className="font-bold font-primary md:text-6xl">
          Leadership is for every young person
        </h1>
        <p className="text-black font-light  font-primary text-base pt-4 max-w-xl">
          Take part in one of our programs abroad, in your city, or virtually.
          Start your leadership journey with AIESEC.
        </p>
        <Button
          variant="primary"
          className="w-36 md:w-[196px] h-14 font-medium inline-block mt-4"
        >
          Join GDSC UNIBAN
        </Button>
      </div>

      <div className="div w-[500px] h-[450px] bg-[#C4C4C4]"></div>
    </div>
  );
};

export default Hero;
