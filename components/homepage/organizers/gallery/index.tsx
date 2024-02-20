import Button from "@/components/ui/Button";

const Gallery = () => {
  return (
    <section className="text-center px-6 py-10 md:px-28 ">
      <h4 className="max-w-xl font-bold mx-auto pt-10 text-3xl md:text-5xl">
        Our Gallery
      </h4>
      <div className="w-full h-80 bg-lightblue my-6"></div>
      <div className="max-w-3xl mx-auto text-center mt-5">
        <p className="font-light">
          A picture is worth a thousand words, they say. So, why don&apos;t you dive
          into our gallery to see for yourself what we do and how we do it?
        </p>

        <Button
          variant="primary"
          className="w-[196px] h-14 font-medium inline-block mt-6"
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
