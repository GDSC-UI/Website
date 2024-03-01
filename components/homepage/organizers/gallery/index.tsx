import Button from "@/components/ui/Button";

const Gallery = () => {
  return (
    <section className="text-center px-6 py-10 md:px-28 ">
      <h4 className="max-w-xl font-bold mx-auto pt-10 text-3xl md:text-5xl">
        Our Gallery
      </h4>
      <div className="grid my-10 w-full h-[600px] gap-5 grid-cols-1 md:grid-rows-11 md:grid-cols-4">
        <div className="blue rounded-lg bg-lightgrey md:row-span-11 md:col-span-2"></div>
        <div className="green rounded-lg  bg-lightgrey md:row-span-5 md:col-span-2"></div>
        <div className="yellow  rounded-lg bg-lightgrey md:row-span-6"></div>
        <div className="red  rounded-lg bg-lightgrey md:row-span-6"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-5">
        <p className="font-normal text-grey">
          A picture is worth a thousand words, they say. So, why don&apos;t you
          dive into our gallery to see for yourself what we do and how we do it?
        </p>

        <Button
          variant="primary"
          className="w-[196px] h-14 font-medium inline-block ml-6 mt-6"
        >
          Join GDSC UNIBAN
        </Button>

        <Button
          variant="transparent"
          className="w-[196px] h-14 font-medium inline-block ml-6 mt-6"
        >
          Join GDSC UNIBAN
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
