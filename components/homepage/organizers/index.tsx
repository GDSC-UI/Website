import SpeakerCard from "@/components/shared/speaker";

const Organizers = () => {
  return (     <section className=" px-4 md:px-28 md:py-20 py-16  bg-lightblue">

  <h3 className=" font-bold md:text-5xl text-3xl text-center">
  Meet Our Organizers
  </h3>
  <p className="text-center  font-light max-w-2xl mx-auto mt-6">
  Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra.
  </p>

  <div className="flex mt-14 gap-10 flex-wrap justify-center">
    <SpeakerCard/>
    <SpeakerCard/>
    <SpeakerCard/>
    <SpeakerCard/>
    <SpeakerCard/>
    <SpeakerCard/>
    <SpeakerCard/>
    <SpeakerCard/>
  </div>
  
  </section> );
}
 
export default Organizers;