import Button from "@/components/ui/Button"
import { FlexContainer } from "@/components/ui/flex-container"
import { Section } from "@/components/ui/section"
import { SpeakerCardsView } from "./speakers"
import { PanelView } from "./panel-view"
import { FourColGrid } from "@/components/ui/grid-container"
import { Gallery } from "@/components/ui/gallery"

export const metadata = {
  title: `Tech Quest`,
}

export default function Page() {
  return (
    <div>
      <FlexContainer heading="Tech Quest" period="4th November, 2023">
        <p>
          TechQuest was a one-day event meticulously crafted to assist newbies
          and tech enthusiasts in discovering their ideal tech journey based on
          their unique interests, educational backgrounds, or personal passions.
          Our primary mission was to unveil the captivating realm of technology,
          with a strong emphasis on nurturing the fundamental problem-solving
          mindset at its core.
        </p>
      </FlexContainer>
      <Section content="Whatʼs it about?" heading="about tech quest">
        <p>
          Over the past couple of years, the Google Developer Student Club at
          the University of Ibadan has been dedicated to fostering community,
          learning and innovation among the student developer community at the
          University of Ibadan. The club has organized workshops, speaker
          sessions, hackathons, and sprints; building expertise and nurturing
          innovation. The club is a thriving community with 2000+ members with
          an interest in technology.
        </p>
        <p>
          This year, we decided to go harder with our dedication towards
          building expertise and promoting the problem-solving mindset of
          technology. We have lined up several events that will help us achieve
          this goal. Amongst these events is one of our two flagship events -
          TechQuest.TechQuest was a one-day event meticulously crafted to assist
          newbies and tech enthusiasts in discovering their ideal tech journey
          based on their unique interests, educational backgrounds, or personal
          passions. Our primary mission was to unveil the captivating realm of
          technology, with a strong emphasis on nurturing the fundamental
          problem-solving mindset at its core
        </p>
      </Section>
      <main className="bg-lightblue">
        <Section heading="meet our speakers">
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et
            sit enim nibh ac neque viverra.
          </p>
          <SpeakerCardsView />
        </Section>
        <Section heading="panel discussion">
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et
            sit enim nibh ac neque viverra.
          </p>
          <PanelView />
        </Section>
        <Section heading="partnerships & sponsors">
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et
            sit enim nibh ac neque viverra.
          </p>
          <FourColGrid>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="size-40 bg-lightgrey"></div>
            ))}
          </FourColGrid>
        </Section>
        <Section heading="event pictures">
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et
            sit enim nibh ac neque viverra.
          </p>
          <Gallery />
          <Button className="inline-block">SEE MORE</Button>
        </Section>
      </main>
    </div>
  )
}
