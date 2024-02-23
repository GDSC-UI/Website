import Button from "@/components/ui/Button"
import { Section } from "@/components/ui/section"
import { HTMLInputTypeAttribute, PropsWithChildren } from "react"
import fontStyle from "./font.module.css"
import { cn } from "@/lib/utils"
import { Socials } from "@/components/ui/socials"
import { ContactList } from "./contact-list"
import { HeroImage } from "@/components/ui/hero-image"

export default function Page() {
  return (
    <div>
      <HeroImage />
      <Section heading="contact us" content="You have a message for us?">
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat.
        </p>
      </Section>
      <ContactView />
    </div>
  )
}

function ContactView() {
  return (
    <main className="flex justify-center my-20">
      <div className="bg-[#F1F3F4] flex justify-center rounded-[2.5rem] gap-0">
        <ContactCard />
        <ContactForm />
      </div>
    </main>
  )
}

function ContactCard() {
  return (
    <section className="bg-blue rounded-[2.5rem] p-20 text-white space-y-16">
      <div className="text-center space-y-6">
        <p className={fontStyle.roboto_mono}>Contact Information</p>
        <p>Fill the form and our team will get back to you within 24 hours</p>
      </div>
      <ContactList />
      <Socials />
    </section>
  )
}
const CLASS_NAME = `border border-[#5F6368] rounded-lg w-full`

function ContactForm() {
  return (
    <form className="pt-[7.5rem] pb-[4.75rem] px-20 rounded-e-[2.5rem] space-y-10">
      <LabelInput>your full name</LabelInput>
      <div className="flex gap-10">
        <LabelInput type="email">email</LabelInput>
        <LabelInput type="tel">phone</LabelInput>
      </div>
      <LabelTextarea>message</LabelTextarea>
      <div className="text-right">
        <Button className="inline-block">Send Message</Button>
      </div>
    </form>
  )
}

function Label({
  label,
  children,
}: Required<PropsWithChildren<{ label: string }>>) {
  return (
    <label className="space-y-2 [&>*]:bg-transparent block">
      <p className="capitalize">{label}</p>
      {children}
    </label>
  )
}

function LabelInput({
  children,
  type,
}: Required<PropsWithChildren> & { type?: HTMLInputTypeAttribute }) {
  return (
    <Label label={children as string}>
      <input
        className={cn(
          `p-2
        `,
          CLASS_NAME
        )}
        type={type}
        spellCheck={false}
        autoCapitalize="on"
      />
    </Label>
  )
}

function LabelTextarea({ children }: Required<PropsWithChildren>) {
  return (
    <Label label={children as string}>
      <textarea className={cn(`h-28 resize-none px-2`, CLASS_NAME)}></textarea>
    </Label>
  )
}
