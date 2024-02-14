import Button from "@/components/ui/Button"
import { Section } from "@/components/ui/section"

export const metadata = {
  title:`Events`
}

export default function Page() {
  return (
    <div>
      <div className="h-80 bg-gray-400"></div>
      <Section
        content="Featured Events"
        heading="Developer Student Club University of Ibadan - Events"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat.
        </p>
      </Section>
      <Section heading="upcoming events" className="bg-gray-100 py-20">
        <p>
          Loremm ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu.
        </p>
        <EventsCardView />
      </Section>
      <Section content="how does GDSC help?" heading="our gallery">
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat. Lorem ipsum dolor sit amet consectetur. Egestas
          turpis integer et sit enim nibh ac neque viverra. Scelerisque neque
          elit tempus metus interdum luctus eget eu. Senectus lorem nec
          habitasse libero senectus proin velit. Dis aliquam convallis donec
          adipiscing pulvinar enim duis fermentum volutpat.
        </p>
        <div className="flex gap-5 justify-center items-center flex-col">
          <Button className="">Join GDSC UNIBADAN</Button>
          <Button variant="outline" className="font-bold">
            See more photos
          </Button>
        </div>
      </Section>
    </div>
  )
}

function EventCard() {
  return (
    <div className="text-left">
      <div className="bg-lightgrey h-72"></div>
      <div className="px-5 space-y-5 border border-blue border-t-0 py-10">
        <h3>Global Gamers Challenge by Flutter and Global Citizen</h3>
        <span className="inline-block">
          {new Date().toDateString()} | X space
        </span>
        <p>
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
    <main className="flex gap-10">
      {[1, 2, 3].map((num) => (
        <EventCard key={num} />
      ))}
    </main>
  )
}
