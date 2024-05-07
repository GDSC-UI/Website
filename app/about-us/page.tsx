import Gallery from "@/components/homepage/organizers/gallery"
import SpeakerCard from "@/components/shared/speaker"
import { FourColGrid } from "@/components/ui/grid-container"
import { HeroImage } from "@/components/ui/hero-image"
import { LeadsList } from "@/ui/leads-list/leads-list"
import { Section } from "@/components/ui/section"
import eniolaSrc from "@/public/organizers-images/EniolaOluwa.jpg"
import toyyibahSrc from "@/public/organizers-images/Toyyibah.jpg"
import olapadeSrc from "@/public/organizers-images/olapade.jpg"
import oyeroSrc from "@/public/organizers-images/oyero.jpg"

const ORGANIZERS = [
  { name: `Bukola Olapade`, src: olapadeSrc, title: "Community Lead" },
  { name: `EniolaOluwa Bakare`, src: eniolaSrc, title: "Community Co-lead" },
  { name: `Oyero Habibulah`, src: oyeroSrc, title: "Technical Lead" },
  { name: `Toyyibah Akinlusi`, src: toyyibahSrc, title: "Non-Technical Lead" },
]

export default function Page() {
  return (
    <section className="">
      <HeroImage />

      <Section heading="Developer Student Club University of Ibadan">
        <p className="text-grey text-base">
          GDSC serves as a launchpad for young developers, offering a dynamic
          platform where students can hone their skills, explore innovative
          technologies, and collaborate on exciting projects. Through workshops,
          seminars, and hands-on training sessions, GDSC equips student
          developers with the tools and knowledge they need to thrive in
          today&apos;s tech-driven world.
        </p>

        <p className="text-grey text-base">
          Here, students have access to a vibrant community of like-minded peers
          and industry professionals who are passionate about technology and
          eager to share their expertise.
        </p>
        <p className="text-grey text-base">
          GDSC also provides a supportive environment where you can ask
          questions, seek guidance, and forge valuable connections that can last
          a lifetime.
        </p>
      </Section>

      <section className="bg-gray-100 py-20 flex justify-between md:px-28 px-6 gap-4">
        <div className="text-center">
          <p className="">Since</p>
          <h5 className="text-3xl font-bold mt-4  md:text-5xl">2019</h5>
        </div>

        <div className="text-center">
          <p className="">Members</p>
          <h5 className="text-3xl font-bold mt-4 md:text-5xl">200+</h5>
        </div>

        <div className="text-center">
          <p className="">Events</p>
          <h5 className="text-3xl font-bold mt-4  md:text-5xl">200+</h5>
        </div>

        <div className="text-center">
          <p className="">Organizers</p>
          <h5 className="text-3xl font-bold  mt-4 md:text-5xl">200+</h5>
        </div>
      </section>

      <section className="md:px-28 py-10">
        <h3 className="font-bold text-3xl md:text-[32px] mx-auto text-center">
          Our core values
        </h3>
        <p className="max-w-3xl text-grey mx-auto text-center mt-6">
          For us at GDSC it&apos;s all about community, learning, innovation,
          inclusivity, empowerment, and networking. These are the values we live
          in order to foster a vibrant environment for student developers.
        </p>

        <div className="flex justify-center flex-wrap mt-8">
          <div className="border-l border-t md:border-b border-r md:border-r-0 border-blue w-72 md:h-96 py-10 px-6">
            <h4 className="font-bold text-2xl ">Community</h4>
            <p className="text-grey pt-5 text-base font-light">
              Together, we thrive. At GDSC, we believe in fostering a vibrant
              community where diversity, collaboration, and inclusion flourish.
              Join us as we embrace innovation, support one another, and make a
              meaningful impact. Welcome to our inclusive family.
            </p>
          </div>
          <div className="border-l border-t border-b border-r md:border-r-0 border-green w-72 py-10 px-6">
            <h4 className="font-bold text-2xl ">Learning</h4>
            <p className="text-grey pt-5 text-base font-light">
              Empowerment through knowledge. At GDSC, we are committed to
              continuous learning and growth. Explore new technologies, expand
              your skills, suppress your fear and embark on a journey of
              discovery with our supportive learning environment. Join us as we
              embrace the power of education to shape the future.
            </p>
          </div>
          <div className="border-l md:border-t md:border-b border-r md:border-r-0 border-yellow w-72 py-10 px-6">
            <h4 className="font-bold text-2xl ">Inclusivity</h4>
            <p className="text-grey pt-5 text-base font-light">
              Here, differences unite us. At GDSC, we&apos;re not just breaking
              barriers, we&apos;re building bridges . We embrace your
              uniqueness, amplify diverse voices, and create extraordinary
              things together.
            </p>
          </div>
          <div className="border border-red w-72 py-10 px-6">
            <h4 className="font-bold text-2xl ">Empowerment</h4>
            <p className="text-grey pt-5 text-base font-light">
              Igniting potential, sparking change. At GDSC, we believe in the
              transformative power of empowerment. We&apos;re here to see you
              unleash your creativity, seize opportunities, and chart your
              course towards greatness.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16  md:px-28 md:py-20 bg-lightblue">
        <h3 className="text-3xl font-bold text-center  md:text-5xl">
          Meet Our Organizers
        </h3>
        <p className="max-w-2xl mx-auto text-grey mt-6 mb-10 font-light text-center">
          Meet our chefs. Get to know the people behind the magic; the brains
          behind the scene.
        </p>
        <section>
          <FourColGrid>
            {ORGANIZERS.map((organizer) => (
              <SpeakerCard key={organizer.name} {...organizer} />
            ))}
          </FourColGrid>
          <LeadsList />
        </section>
      </section>
      <Gallery />
    </section>
  )
}
