import ProgramCard from "@/components/ui/ProgramCard";

const Programmes = () => {
  return (
    <section className="bg-lightblue px-6 md:px-28 md:py-20 py-14">
      <h3 className=" md:text-5xl text-3xl text-center">Our Programmes</h3>
      <p className="font-normal text-center mx-auto pt-5 max-w-3xl text-grey">
        Explore all we do at the GDSC, University of Ibadan. There&apos;s
        something for everyone. Come along now, let&apos;s see what tickles your
        fancy.
      </p>

      <div className="flex mt-10 gap-10 items-center justify-start flex-wrap">
        <ProgramCard
          classnames={`w-[26rem]`}
          title="Study Jams"
          route="/study-jam"
          description="Study Jam Sessions represent a comprehensive 6-8 week program tailored to assist individuals, particularly beginners, in navigating a specific technology stack. During each weekly session, participants are encouraged to dedicate at least 1-2 hours to their learning journey."
        />
        <ProgramCard
          title="Techquest"
          route="/tech-quest"
          description="TechQuest was a one-day event meticulously crafted to assist newbies and tech enthusiasts in discovering their ideal tech journey based on their unique interests, educational backgrounds, or personal passions. Our primary mission was to unveil the captivating realm of technology"
        />
        <ProgramCard
          title="NextHack"
          route="/next-hack"
          description="NexTech Hack is a groundbreaking hackathon hosted by the Google Developer Student Club (GDSC) at the University of Ibadan. It is a premier event designed to bridge the gap between technical skills and practical problem-solving, while fostering innovation and collaboration among students in the South-West region of Nigeria."
        />
        <ProgramCard
          title="Google Solutions Challenge"
          route="/next-hack"
          description="The Google Solutions Challenge stands as an impactful program orchestrated by GDSC (Google Developer Student Clubs) with the primary objective of empowering university students to address local challenges by harnessing the capabilities of Google technologies."
        />
      </div>
    </section>
  );
};

export default Programmes;
