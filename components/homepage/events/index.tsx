import EventsCards from "@/components/ui/EventsCard";

const ExploreEvents = () => {
  return (
    <section className=" px-4 md:px-28 md:py-20 py-16 ">
      <div className="text-center my-4">
      <button className="bg-lightblue  text-base font-normal p-3  mx-auto text-center rounded-xl">
        Experience our events
      </button>
      </div>
   
      <h3 className=" font-bold md:text-5xl text-3xl text-center">
        GDSC-UI Events
      </h3>
      <p className="text-center  font-light max-w-2xl mx-auto mt-6">
        Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
        enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum
        luctus eget eu.
      </p>

      <div className="flex mt-10 gap-6 items-center justify-start flex-wrap">
        <EventsCards
          title="Study Jams"
          route="event/studyjam"
          description="Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat."
        />
          <EventsCards
          title="Study Jams"
          route="event/studyjam"
          description="Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat."
        />
          <EventsCards
          title="Study Jams"
          route="event/studyjam"
          description="Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat."
        />
       
      </div>
    </section>
  );
};

export default ExploreEvents;
