import Button from "@/components/ui/Button"
import { HeroImage } from "@/components/ui/hero-image"
import { Section } from "@/components/ui/section"
import { PastEvents } from "./events"

export const metadata = {
  title: `Events`,
}

export default function Page() {
  return (
    <div>
      <HeroImage />
      <div className="text-center space-y-5 px-8 md:px-[7.5rem]">
        <h2>Upcoming Events</h2>
        <p className="text-grey">
          Interesting times ahead, guys! Stay informed and up-to-date about our
          upcoming events.
        </p>
      </div>
      <section className="py-20 px-8 md:px-[7.5rem]">
        <EventsCardView />
      </section>
      <PastEvents />
    </div>
  )
}

function EventCard() {
  return (
    <div className="text-left">
      <div className="bg-lightgrey h-72"></div>
      <div className="px-5 py-10 space-y-5 border border-t-0 border-blue">
        <h3>Global Gamers Challenge by Flutter and Global Citizen</h3>
        <span className="inline-block">
          {new Date().toDateString()} | X space
        </span>
        <p className="text-grey">
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu.
        </p>
        <Button>Register now</Button>
      </div>
    </div>
  )
}

function EventsCardView() {
  return (
    <main className="flex gap-10 flex-wrap md:flex-nowrap">
      {[1, 2, 3].map((num) => (
        <EventCard key={num} />
      ))}
    </main>
  )
}
