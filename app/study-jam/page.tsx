import Button from "@/components/ui/Button"
import { FlexContainer } from "@/components/ui/flex-container"
import { Section } from "@/components/ui/section"
import { ListLeads } from "./leads-list"

export const metadata = {
  title: `Study Jam`,
}

export default function Page() {
  return (
    <div>
      <FlexContainer heading="study jam sessions" period="Weekly">
        <p className="text-grey">
          Our study jam sessions are community-run study groups for developers.
          Dive into the coding dojo with GDSC Study Jams! Our Study Jams are the
          turbo boosters for your tech quest, blending learning with laughter
          and algorithms with amazement.
          <br /> These sessions arenʼt just about cracking the code; theyʼre
          about cracking open a world of possibilities. With hands-on
          activities, expert insights, and a sprinkle of camaraderie, our Study
          Jams transform the daunting into the delightful, one line of code at a
          time. It doesnʼt matter if youʼre a noob or an expert, buckle up for
          an adventure where bugs are features in disguise, errors are stepping
          stones, and every line of code is a brushstroke on the canvas of
          creation. Letʼs jam, learn, and code our way to the future, one
          session at a time
        </p>
        <Button>Join now</Button>
      </FlexContainer>
      <Section content="What do  we do?" heading="how it works?">
        <p>
          These sessions arenʼt just about cracking the code; theyʼre about
          cracking open a world of possibilities. With hands-on activities,
          expert insights, and a sprinkle of camaraderie, our Study Jams
          transform the daunting into the delightful, one line of code at a
          time.
        </p>
        <p>
          It doesnʼt matter if youʼre a noob or an expert, buckle up for an
          adventure where bugs are features in disguise, errors are stepping
          stones, and every line of code is a brushstroke on the canvas of
          creation. Letʼs jam, learn, and code our way to the future, one
          session at a time!
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
        <Button className="inline-block uppercase">See more</Button>
      </Section>
      <main className="text-center bg-lightblue py-20 flex-col space-y-10">
        <div className="space-y-5">
          <h1>Meet our Team Leads</h1>
          <p className="text-grey">
            Meet the faces steering our journey. Get to know the people driving
            innovation, collaboration and community impact.
          </p>
        </div>
        <ListLeads />
      </main>
    </div>
  )
}

function Card() {
  return (
    <div className="text-left">
      <div className="bg-lightgrey h-72"></div>
      <div className="px-5 py-10 space-y-5 border">
        <h3>Study Jams</h3>
        <p className="text-grey">
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu.
        </p>
        <p>Read more</p>
      </div>
    </div>
  )
}

function CardsView() {
  return (
    <main className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {[1, 2, 3, 4].map((num) => (
        <Card key={num} />
      ))}
    </main>
  )
}
