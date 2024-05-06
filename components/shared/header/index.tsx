"use client"
import Button from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import style from "./Header.module.css"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { JoinButton } from "@/components/ui/Button/join-button"

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setVisible(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="fixed top-0 right-0 left-0 z-20">
      <header
        ref={headerRef}
        className={`hidden lg:flex px-28 justify-between border-b border-blue items-center py-6  w-full
       bg-white`}
      >
        <Link href="/">
          <Image src="/logo.jpg" width={300} height={53} alt="GDSC UNIBAN" />
        </Link>

        <div className="flex gap-10">
          <Link
            href="/about-us"
            className="text-black text-base font-light hover:text-blue transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            href="/events"
            className="text-black text-base font-light  hover:text-blue  transition-all duration-300"
          >
            Events
          </Link>
          <Link
            href="/programs"
            className="text-black text-base font-light  hover:text-blue  transition-all duration-300"
          >
            Programs
          </Link>
          <div className="dropdown z-50">
            <button className="dropbtn">
              More
              <Image
                width={15}
                height={20}
                src={"./arrow-down.svg"}
                alt="arrow down"
                className="inline-flex"
              />
            </button>
            <div className="dropdown-content shadow-xl bg-white border-b-2 border-blue left-50">
              <Link
                href="/next-hack"
                className="text-black text-base font-light"
              >
                Next Hack
              </Link>
              <Link
                href="/contact-us"
                className="text-black text-base font-light"
              >
                Contact Us
              </Link>
              <Link href="/gallery" className="text-black text-base font-light">
                Gallery
              </Link>
              <Link
                href="/organizers"
                className="text-black text-base font-light"
              >
                Organizers
              </Link>
            </div>
          </div>
        </div>
        <JoinButton />
      </header>

      {/**Mobile */}
      <header
        ref={headerRef}
        className={`flex lg:hidden justify-between items-center bg-white relative py-3 px-5  w-full `}
      >
        <Link href="/">
          <Image src="/logo.jpg" width={270} height={53} alt="GDSC UNIBAN" />
        </Link>

        {visible ? (
          <div
            className={`${
              visible ? style.drop_visible : ""
            } transition-all duration-500 bg-white z-50 shadow-lg lg:shadow-none 
                          px-6 lg:px-0 py-10  w-full absolute left-0 top-16 md:top-28 lg:top-0 lg:static  flex-col 
                          lg:flex-row justify-between lg:items-center lg:space-x-24`}
          >
            <ul className="flex flex-col gap-6 lg:flex-row space-y-2 lg:space-y-0">
              <Link
                href="/about-us"
                className="text-black text-2xl  font-medium hover:text-blue  transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                href="/events"
                className="text-black text-2xl  font-medium hover:text-blue  transition-all duration-300"
              >
                Events
              </Link>
              <Link
                href="/programs"
                className="text-black text-2xl font-medium hover:text-blue  transition-all duration-300"
              >
                Programs
              </Link>
            </ul>
          </div>
        ) : null}

        <button
          onClick={() => setVisible(!visible)}
          tabIndex={0}
          aria-label="menu button"
          role="button"
          className={`
                          appearance-none outline-none text-4xl lg:hidden 
                          cursor-default transition-all duration-300 hover:opacity-70  p-2 md:p-1 flex justify-center items-center box-border `}
        >
          <Menu size={40} />
        </button>
      </header>
    </div>
  )
}

export default Header
