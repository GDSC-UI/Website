import Button from "@/components/ui/Button"
import { FlexContainer } from "@/components/ui/flex-container"
import { Section } from "@/components/ui/section"
import { SpeakerCardsView } from "./speakers"
import { PanelView } from "./panel-view"
import { Gallery } from "@/components/ui/gallery"
import { MyImage } from "@/components/ui/image"
import backdropSrc from "./techquest-images/backdrop.jpg"

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
          <span className="text-blue">TechQuest</span>.
          <br />
        </p>
        <p>
          TechQuest was a one-day event meticulously crafted to assist newbies
          and tech enthusiasts in discovering their ideal tech journey based on
          their unique interests, educational backgrounds, or personal passions.
          Our primary mission was to unveil the captivating realm of technology,
          with a strong emphasis on nurturing the fundamental problem-solving
          mindset at its core.
        </p>
      </Section>
      <main className="bg-lightblue">
        <Section heading="meet our speakers">
          <p>
            Unveiling the voices and faces that are driving positive change here
          </p>
          <SpeakerCardsView />
        </Section>
        <Section heading="panel discussion">
          <p>
            Join the conversation with our diverse thought leaders, ask your
            questions and gain invaluable insight.
          </p>
          <PanelView />
        </Section>
        <Section heading="partnerships & sponsors">
          <p className="text-grey">
            Empowering innovation together: Meet our esteemed partners and
            sponsors driving the future of technology with GDSC.
          </p>
          <MyImage
            src={backdropSrc}
            alt="TechQuest backdrop image that showcases  sponsors and partners for the event"
          />
        </Section>
        <Section heading="event pictures">
          <p>Relive our inspiring experiences in pixels.</p>
          <Gallery />
          <Button className="inline-block">SEE MORE</Button>
        </Section>
      </main>
    </div>
  )
}
