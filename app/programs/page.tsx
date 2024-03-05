import { HeroImage } from "@/components/ui/hero-image"
import ProgramItem from "./programItem"
import Gallery from "@/components/homepage/organizers/gallery"

export const metadata = {
  title: `Programs`,
}
const programs = [
  {
    title: "Study Jam Sessions",
    description:
      "Our study jam sessions are community-run study groups for developers. Dive into the coding dojo with GDSC Study Jams! Our Study Jams are the turbo boosters for your tech quest, blending learning with laughter and algorithms with amazement.",
    about: [
      " Hands-on learning experience",
      "Personal growth and career opportunities",
      "Community Engagement",
    ],
    route: "/study-jam",
    background: true,
  },

  {
    title: "TechQuest",
    description:
      "TechQuest is your gateway to boundless exploration in the world of technology. With a focus on hands-on learning and community-driven innovation, TechQuest offers a diverse array of workshops, hackathons, and projects designed to ignite your curiosity and propel your tech journey forward.",
    about: [
      "Community Collaboration",
      "Encourages Innovation and drives Creativity",
      "Career Opportunities",
    ],
    route: "/tech-quest",
    background: false,
    reverse: true,
  },

  {
    title: "NexTech Hack",
    description:
      "Where innovation meets caffeine-fueled coding marathons! Get ready to unleash your inner tech wizard in a whirlwind of caffeine, creativity, and code. With adrenaline-pumping challenges and round-the-clock hacking, Nextech Hack is the ultimate playground for aspiring developers and problem-solvers alike.",
    about: [
      "Prizes and recognition: Compete and win in order to take home exciting prizes and most importantly bragging rights",
      "Skill Enhancement: Sharpen your coding skills and beat your peak.",
      "Networking Opportunities: Connect with like-minded individual, meet mentors and industry professionals. Expand your network and build valuable relationships",
    ],
    route: "/next-hack",
    background: true,
  },
]
export default function Page() {
  return (
    <div>
      <HeroImage />
      <div className="text-center space-y-5 px-6 md:px-[8.5rem] mb-10">
        <h2>Programs</h2>
        <p className="text-grey text-base mx-auto md:max-w-3xl">
          Dive into our tech playground! From coding crusades to innovation
          escapades, our programs are the fuel for your tech journey. Let&apos;s
          turn ideas into bytes together!
        </p>
      </div>

      <section className="">
        {programs.map((program) => (
          <ProgramItem
            key={program.title}
            title={program.title}
            description={program.description}
            route={program.route}
            about={program.about}
            background={program.background}
            reverse={program.reverse}
          />
        ))}
      </section>
      <Gallery/>
    </div>
  )
}
