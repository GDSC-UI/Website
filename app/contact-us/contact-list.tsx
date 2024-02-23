import { Location } from "@/components/ui/icons/location"
import { Mail } from "@/components/ui/icons/mail"
import { Phone } from "@/components/ui/icons/phone"

const contactData = [
  {
    icon: Phone,
    text: `+234 808 357 7097`,
    link: `tel:+2348003577097`,
  },
  {
    icon: Location,
    text: `University of Ibadan`,
    link: ``,
  },
  {
    icon: Mail,
    text: `gdsc2024@gmail.com`,
    link: `mailto:hello@gdscui.com`,
  },
]

export function ContactList() {
  return (
    <ul className="space-y-8">
      {contactData.map(({ icon, text, link }) => (
        <li key={text}>
          <a href={link} className="inline-flex text-2xl gap-6">
            {icon}&nbsp;
            {text}
          </a>
        </li>
      ))}
    </ul>
  )
}
