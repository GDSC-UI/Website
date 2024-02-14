import Button from "@/components/ui/Button";
import { Section } from "@/components/ui/section";

export default function Page() {
  return (
    <div className="">
      <div className="flex gap-16 bg-gray-100 px-[7.5rem] items-center justify-center">
        <div className="space-y-5 py-[7.5rem] basis-1/2">
          <h1>Study Jam</h1>
          <span className="font-bold inline-block">Weekly</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et
            sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus
            interdum luctus eget eu. Senectus lorem nec habitasse libero
            senectus proin velit. Dis aliquam convallis donec adipiscing
            pulvinar enim duis fermentum volutpat.
          </p>
          <Button>Join now</Button>
        </div>
        <div className="size-[400px] bg-gray-200"></div>
      </div>
      <Section content="What do  we do?" heading="how it works?">
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
      </Section>
      <Section content="What do  we do?" heading="previous study jams">
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat.
        </p>
        <CardsView />
        <Button className="uppercase inline-block">See more</Button>
      </Section>
    </div>
  );
}

function Card() {
  return (
    <div className="text-left">
      <div className="bg-lightgrey h-72"></div>
      <div className="px-5 space-y-5 border py-10">
        <h3>Study Jams</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu.
        </p>
        <p>Read more</p>
      </div>
    </div>
  );
}

function CardsView() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[1, 2, 3, 4].map((num) => (
        <Card key={num} />
      ))}
    </main>
  );
}
