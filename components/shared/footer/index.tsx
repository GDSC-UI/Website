"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { footerLinks } from "./footer.data"
import { Socials } from "@/components/ui/socials"

const socialLinks = [
  { title: "X", route: "https://x.com/onbrails" },
  { title: "LinkedIn", route: "https://www.linkedin.com/company/onbrails/" },
  { title: "Instagram", route: "https://instagram.com/onbrails" },
  { title: "  Facebook", route: "https://www.facebook.com/Onbrails" },
]

const Legal = [
  { title: `Terms of service `, route: "/terms-of-services" },
  { title: "Privacy policy", route: "/privacy-policy" },
  { title: "Cookie policy", route: "/cookie-policy" },
  { title: "Security", route: "/security" },
]

const Footer = () => {
  const pathname = usePathname()

  return (
    <section className="px-5 md:px-28 bg-lightblue py-8">
      <div className={`pt-10 pb-6 border-primary-100/10`}>
        <div className="flex items-start flex-wrap gap-6 md:gap-2 md:flex-row md:text-left justify-between">
          {Object.entries(footerLinks.links).map(([title, links]) => (
            <React.Fragment key={title}>
              <section className="min-w-[8rem] md:p-4">
                <h5 className="font-medium text-blue text-xl mb-2">{title}</h5>

                <ul key={title}>
                  {links.map((l) => (
                    <li key={l.title}>
                      <Link
                        href={l.route}
                        className="text-blue normal-case  text-base  font-light block   md:text-left py-2"
                      >
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </React.Fragment>
          ))}

          <section className="max-w-max md:p-4">
            <h5 className="font-medium  text-blue text-xl mb-2">Follow Us</h5>
            <ul className="mb-2">
              <li>
                <Link
                  href="mailto:dsc.unibadan@gmail.com"
                  className="text-blue normal-case  text-base  font-light block   md:text-left py-2"
                >
                  dsc.unibadan@gmail.com
                </Link>
              </li>
            </ul>
            <Socials />
          </section>
        </div>

        <div className="flex flex-wrap gap-2 justify-between border-t-2 py-16  mt-10 items-center">
          <h3 className="font-bold text-3xl md:text-5xl">GDSC-UNIBADAN</h3>

          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-black underline normal-case  text-base  font-light block   md:text-left py-2"
            >
              Privacy
            </Link>
            <Link
              href="/privacy"
              className="text-black underline normal-case  text-base font-light block   md:text-left py-2"
            >
              Terms of use{" "}
            </Link>
          </div>
        </div>
        <p className="text-center  md:w-auto font-light">
          Copyright © {new Date().getFullYear()} GDSCUI
        </p>
      </div>
    </section>
  )
}

export default Footer
