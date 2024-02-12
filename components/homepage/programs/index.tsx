import ProgramCard from "@/components/ui/ProgramCard";

const Programmes = () => {
  return (
    <section className="bg-lightblue px-28 py-20">
      <h3 className="font-primary text-5xl text-center">Our Programmes</h3>
      <p className="font-light text-center mx-auto pt-5 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
        enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum
        luctus eget eu.
      </p>

      <div className="flex mt-10 gap-10 items-center justify-start flex-wrap">
        <ProgramCard
          title="Study Jams"
          route="event/studyjam"
          description="Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat."
        />
        <ProgramCard
          title="Study Jams"
          route="event/studyjam"
          description="Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat."
        />
        <ProgramCard
          title="Study Jams"
          route="event/studyjam"
          description="Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat."
        />
      </div>
    </section>
  );
};

export default Programmes;
