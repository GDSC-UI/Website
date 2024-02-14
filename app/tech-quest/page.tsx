import SpeakerCard from "@/components/shared/speaker"
import Button from "@/components/ui/Button"
import { FlexContainer } from "@/components/ui/flex-container"
import { FourColGrid, TwobyTwoGrid } from "@/components/ui/grid-container"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: `Tech Quest`,
}

export default function Page() {
  return (
    <div>
      <FlexContainer heading="Tech Quest" period="20th November, 2023" />
      <Section content="Whatʼs it about?" heading="about tech quest">
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
      <Section heading="meet our speakers" className="bg-gray-200">
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra.
        </p>
        <SpeakerCardsView />
      </Section>
      <Section heading="panel discussion">
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra.
        </p>
        <PanelView />
      </Section>
      <Section heading="event pictures">
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra.
        </p>
        <PanelView />
        <Button className="inline-block">SEE MORE</Button>
      </Section>
    </div>
  )
}

function SpeakerCardsView() {
  return (
    <FourColGrid>
      {[1, 2, 3, 4].map((num) => (
        <SpeakerCard key={num} />
      ))}
    </FourColGrid>
  )
}

function PanelView() {
  return (
    <TwobyTwoGrid>
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className="size-[500px] bg-lightgrey" />
      ))}
    </TwobyTwoGrid>
  )
}
