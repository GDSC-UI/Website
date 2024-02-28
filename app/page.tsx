import ExploreEvents from "@/components/homepage/events"
import FAQS from "@/components/homepage/faqs"
import Hero from "@/components/homepage/hero"
import Organizers from "@/components/homepage/organizers"
import Gallery from "@/components/homepage/organizers/gallery"
import PartnerSponsors from "@/components/homepage/partners-sponsors"
import Programmes from "@/components/homepage/programs"
import HowWeHelp from "@/components/shared/how-we-help"

export default function Home() {
  return (
    <section className="font-bold">
      <Hero />
      <HowWeHelp textOne="Google Developer Student Clubs, University of Ibadan (GDSC UI) is a dynamic tech club dedicated to fostering community, learning and innovation among the student developer community. GDSC UI operates under the umbrella of Google Developer Student Clubs. Our mission is to create a vibrant community that empowers members to strive, grow, and learn the ever-evolving world of technology." />
      <Programmes />
      <ExploreEvents />
      <PartnerSponsors />
      <FAQS />
      <Organizers />
      <Gallery />
    </section>
  )
}
