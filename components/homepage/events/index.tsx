import EventsCards from "@/components/ui/EventsCard";
import imageOne from "./images/image_1.jpg";
import imageTwo from "./images/image_2.jpg";
import imageThree from "./images/image_3.jpg";
import Button from "@/components/ui/Button";

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
      <p className="text-center text-grey  font-light max-w-2xl mx-auto mt-6">
        Check out our groundbreaking events, testaments of our thrill for
        learning.
      </p>

      <div className="flex mt-10 gap-6 items-center justify-start flex-wrap">
        <EventsCards
          title="A Veterinarian's Guide to Tech with Data"
          image={imageOne}
          route="https://gdsc.community.dev/events/details/developer-student-clubs-university-of-ibadan-presents-a-veterinarians-guide-to-tech-with-data-introduction-to-data-analysis-2023-10-21/"
          description="Join the Association of Veterinary Medical Students, UNIBADAN and the Google Developer Student Club, University of Ibadan."
        />
        <EventsCards
          image={imageTwo}
          title="Year-End Chronicles: A Community Reflection of 2023"
          route="https://gdsc.community.dev/events/details/developer-student-clubs-university-of-ibadan-presents-year-end-chronicles-a-community-reflection-of-2023/"
          description="After a lengthy year, it's perfectly normal to view calendar years as an opportunity to pause, reflect, reassess, and progress. What could be ...."
        />
        <EventsCards
          image={imageThree}
          title="Navigating Through The Hurdles in the Flutterverse"
          route="https://gdsc.community.dev/events/details/developer-student-clubs-university-of-ibadan-presents-navigating-through-the-hurdles-in-the-flutterverse/"
          description="NJoin us for an exciting and insightful speaker session as we host a senior mobile engineer who has recently earned the prestigious title...."
        />
      </div>

      <div className="text-center my-4">
        <Button
          variant="outline"
          className="w-[144px] h-14 font-medium inline-block mt-4"
        >
          See more events
        </Button>
      </div>
    </section>
  );
};

export default ExploreEvents;
