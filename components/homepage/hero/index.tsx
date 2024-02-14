import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="flex flex-wrap-reverse p-6 md:p-28 items-center gap-10  bg-lightblue">
      <div className="left max-w-2xl">
        <h1 className="font-bold text-3xl md:text-6xl">
          Technology is for every young person
        </h1>
        <p className="text-black font-light  text-base pt-4 max-w-xl">
          Join and grow your skills in your school, or virtually. Kickstart your
          career journey with GDSCUI.
        </p>
        <Button
          variant="primary"
          className="w-[196px] h-14 font-medium inline-block mt-4"
        >
          Join GDSC UNIBADAN
        </Button>
      </div>

      <div className="md:w-[500px] w-full h-[300px] md:h-[450px] bg-[#C4C4C4]"></div>
    </div>
  );
};

export default Hero;
