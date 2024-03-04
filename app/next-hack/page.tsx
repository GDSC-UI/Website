import Button from "@/components/ui/Button"
import { FlexContainer } from "@/components/ui/flex-container"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"
import clsx from "clsx"

export const metadata = {
  title: `Next Hack`,
}

export default function Page() {
  return (
    <div>
      <FlexContainer heading="nexTech hack" period={new Date().toDateString()}>
        <p className="text-grey text-pretty">
          NexTech Hack is a groundbreaking hackathon hosted by the Google
          Developer Student Club (GDSC) at the University of Ibadan. It is a
          premier event designed to bridge the gap between technical skills and
          practical problem-solving, while fostering innovation and
          collaboration among students in the South-West region of Nigeria.
          <br />
          <br />
          NexTech Hack was conceptualized with a clear purpose in mind: to
          leverage technology for local impact. Recognizing the unique
          challenges faced by communities in the South-West region, NexTech Hack
          aims to empower students to apply their technical expertise to address
          these challenges head-on. The event serves as a platform for students
          to develop innovative solutions that tackle real-world problems and
          drive positive change within their communities.
        </p>
        <Button>Register now</Button>
      </FlexContainer>
      <article className="py-20 px-8 md:px-[7.5rem]">
        <span className="mb-5 block font-medium text-center">
          What area/problem are you focusing on?
        </span>
        <SectionList heading="event format" ordered>
          <p>NexTech Hack is structured into two stages:</p>
          <li>
            Online Preliminary Round: Participants will compete in an online
            hackathon where they will have the opportunity to collaborate,
            brainstorm, and develop their projects remotely. During this stage,
            teams will be tasked with identifying a specific problem within
            their community and designing a technological solution to address
            it. Mentors and technical experts will be available to provide
            guidance and support throughout the online phase.
          </li>
          <li>
            Final Stage: Selected teams from the preliminary round will advance
            to the final stage of NexTech Hack, where they will showcase their
            projects in front of a panel of esteemed judges. The final stage
            will be held in a dynamic and interactive environment, providing
            participants with the opportunity to present their solutions,
            receive feedback, and compete for exciting prizes and recognition.
          </li>
          <br />
          <br />
        </SectionList>
        <SectionList heading="key highlights">
          <li>
            Problem-Solving Focus: NexTech Hack emphasizes the importance of
            problem-solving and innovation, challenging participants to think
            critically and creatively about how technology can be used to
            address pressing issues within their communities.
          </li>
          <li>
            Collaborative Environment: Participants will have the opportunity to
            collaborate with peers, mentors, and industry experts, fostering a
            sense of camaraderie and teamwork throughout the event.
          </li>
          <li>
            Networking Opportunities: NexTech Hack provides a unique networking
            platform for students to connect with like-minded individuals,
            industry professionals, and potential collaborators, paving the way
            for future partnerships and
          </li>
          <li>
            Community Impact: At its core, NexTech Hack is about making a
            tangible difference in the lives of people within the South-West
            region of Nigeria. By empowering students to develop innovative
            solutions, NexTech Hack aims to create lasting impact and drive
            positive change within local communities.
          </li>
        </SectionList>
      </article>
      <Section content="How and when to register" heading="join us">
        <div className="text-center space-y-10">
          <p className="text-left">
            NexTech Hack is more than just a hackathon; itʼs a movement towards
            a brighter, more technologically empowered future. Whether youʼre a
            student, a mentor, a judge, or an industry partner, we invite you to
            join us on this transformative journey. Together, letʼs harness the
            power of technology to build a better tomorrow for all. <br />
            Are you ready to hack for change? Join us at NexTech Hack and be a
            part of something extraordinary.
          </p>
          <Button className="inline-block">Register now</Button>
        </div>
      </Section>
    </div>
  )
}

function SectionList({
  heading,
  ordered,
  children,
}: {
  heading: string
  ordered?: boolean
  children: React.ReactNode
}) {
  const List = ordered ? `ol` : `ul`
  return (
    <section className="space-y-10">
      <h2 className="capitalize text-center">{heading}</h2>
      <List
        className={clsx(
          `text-grey space-y-4 list-inside`,
          ordered ? `list-decimal` : `list-disc`
        )}
      >
        {children}
      </List>
    </section>
  )
}
