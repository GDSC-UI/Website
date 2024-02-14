import ExploreEvents from "@/components/homepage/events";
import Hero from "@/components/homepage/hero";
import Programmes from "@/components/homepage/programs";
import PartnerSponsors from "@/components/homepage/partners-sponsors";
import HowWeHelp from "@/components/shared/how-we-help";
import FAQS from "@/components/homepage/faqs";
import Organizers from "@/components/homepage/organizers";
import Gallery from "@/components/homepage/organizers/gallery";

export default function Home() {
  return (
    <section className="font-bold">
      <Hero />
      <HowWeHelp
        textOne="  Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat."
        textTwo="Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat. Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat."
      />
      <Programmes/>
      <ExploreEvents/>
      <PartnerSponsors/>
      <FAQS/>
      <Organizers/>
      <Gallery/>
    </section>
  );
}
