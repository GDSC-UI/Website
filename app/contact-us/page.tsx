import { Section } from "@/components/ui/section"
import fontStyle from "./font.module.css"
import { cn } from "@/lib/utils"
import { Socials } from "@/components/ui/socials"
import { ContactList } from "./contact-list"
import { HeroImage } from "@/components/ui/hero-image"
import { ContactForm } from "./form/form"

export const metadata = {
  title: `Contact  us`,
}

export default function Page() {
  return (
    <div>
      <HeroImage />
      <Section heading="contact us" content="You have a message for us?">
        <p className="text-pretty">
          Questions are the keys that unlock doors to understanding and
          innovation.
          <br /> Ask away !
        </p>
      </Section>
      <ContactView />
    </div>
  )
}

function ContactView() {
  return (
    <main className="flex justify-center my-20 mx-8 md:mx-[7.5rem]">
      <div className="bg-[#F1F3F4] flex justify-center rounded-[2.5rem] gap-0 flex-wrap lg:flex-nowrap">
        <ContactCard />
        <ContactForm />
      </div>
    </main>
  )
}

function ContactCard() {
  return (
    <section className="bg-blue rounded-[2.5rem] p-8 md:p-20 text-white space-y-16">
      <div className="text-center space-y-6">
        <p className={cn(`text-2xl`, fontStyle.roboto_mono)}>
          Contact Information
        </p>
        <p className="text-lg text-pretty">
          Fill the form and our team will get back to you within 24 hours
        </p>
      </div>
      <ContactList />
      <Socials />
    </section>
  )
}
