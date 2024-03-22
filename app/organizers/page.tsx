import Button from "@/components/ui/Button"
import TeamCard from "@/components/ui/Teamcard"
import { HeroImage } from "@/components/ui/hero-image"
import { team } from "./team.data"

export const metadata = {
  title: `Organizers`,
}

export default function Page() {
  return (
    <div>
      <section className="bg-lightblue px-8 md:px-20 py-20">
        <HeroImage />
        <div className="text-center space-y-5 px-8 md:px-[7.5rem]">
          <h2>Meet the Team</h2>
          <p className="text-grey">
            It&apos;s team work that makes the dream work! Take a look at the
            team behind all you see. The various parts of our enigma, if you
            will
          </p>
        </div>
      </section>
      <section className="bg-white">
        <nav className="md:flex hidden py-10 px-10 md:px-28 justify-between items-center border-b border-blue">
          <button className="bg-lightblue uppercase w-52 h-20 text-blue text-2xl">
            the {`  `} team
          </button>

          <ul className="flex gap-10">
            <button className="text-base ">All</button>
            <button className="text-base ">Managers</button>
            <button className="text-base ">Organizers</button>
            <button className="text-base ">Development</button>
          </ul>

          <Button
            variant="primary"
            className="w-36 md:w-[196px] h-14 font-medium inline-block"
          >
            Join GDSC UNIBAN
          </Button>
        </nav>

        <div className="flex px-6 items-start  md:justify-evenly py-10 gap-y-16 gap-x-3 md:gap-y-24 flex-wrap">
          {team.map((item) => (
            <TeamCard
              key={item.name}
              name={item.name}
              role={item.title}
              description={item.description}
              image={item.src}
              github={item.socials.github}
              linkedIn={item.socials.linkedin}
              twitter={item.socials.twitter}
              website={item.socials.website}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
//
