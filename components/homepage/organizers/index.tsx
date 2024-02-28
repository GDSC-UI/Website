import SpeakerCard from "@/components/shared/speaker"

const Organizers = () => {
  return (
    <section className="px-4 py-16  md:px-28 md:py-20 bg-lightblue">
      <h3 className="text-3xl font-bold text-center  md:text-5xl">
        Meet Our Organizers
      </h3>
      <p className="max-w-2xl mx-auto mt-6 font-light text-center">
        Meet our chefs. Get to know the people behind the magic; the brains
        behind the scene.
      </p>

      <div className="flex flex-wrap justify-center gap-16 mt-14">
        {/* <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard /> */}
      </div>
    </section>
  )
}

export default Organizers
