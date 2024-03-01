import SpeakerCard from "@/components/shared/speaker";
import { FourColGrid } from "@/components/ui/grid-container";
import bukolaSrc from "./organizers-images/olapade.jpg";
import eniolaSrc from "./organizers-images/EniolaOluwa.jpg";
import oyeroSrc from "./organizers-images/oyero.jpg";
import toyyibahSrc from "./organizers-images/Toyyibah.jpg";

const ORGANIZERS = [
  { name: `Bukola Olapade`, src: bukolaSrc },
  { name: `EniolaOluwa Bakare`, src: eniolaSrc },
  { name: `Oyero Habibulah`, src: oyeroSrc },
  { name: `Toyyibah Akinlusi`, src: toyyibahSrc },
];

const Organizers = () => {
  return (
    <section className="px-4 py-16  md:px-28 md:py-20 bg-lightblue">
      <h3 className="text-3xl font-bold text-center  md:text-5xl">
        Meet Our Organizers
      </h3>
      <p className="max-w-2xl mx-auto text-grey mt-6 mb-10 font-light text-center">
        Meet our chefs. Get to know the people behind the magic; the brains
        behind the scene.
      </p>

      <FourColGrid>
        {ORGANIZERS.map((organizer) => (
          <SpeakerCard key={organizer.name} {...organizer} />
        ))}
      </FourColGrid>
    </section>
  );
};

export default Organizers;
