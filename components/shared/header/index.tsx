"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import style from "./Header.module.css";
import Button from "@/components/ui/Button";

const Header = () => {
  const headerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  return (
    <div className="fixed top-0 right-0 left-0 z-20">
      <header
        ref={headerRef}
        className={`hidden lg:flex px-28 justify-between border-b border-blue items-center py-6  w-full
       bg-white`}
      >
        <Link href="/">
          <div className="w-32 h-12 bg-black"></div>
        </Link>

        <div className="flex gap-10">
          <Link href="/about-us" className="text-black text-base font-light">
            About Us
          </Link>
          <Link href="/events" className="text-black text-base font-light">
            Events
          </Link>
          <Link href="#programmes" className="text-black text-base font-light">
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
            <div className="dropdown-content shadow-lg bg-white rounded-lg left-50">
              <Link href="/next-hack" className="text-black text-base font-light">
                Next Hack
              </Link>
              <Link href="/study-jam" className="text-black text-base font-light">
                Study Jam
              </Link>
              <Link href="/tech-quest" className="text-black text-base font-light">
               Tech Quest
              </Link>
              <Link href="/organizers" className="text-black text-base font-light">
               Organizers
              </Link>
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          className="w-36 md:w-[196px] h-14 font-medium inline-block"
        >
          Join GDSC UNIBAN
        </Button>
      </header>

      {/**Mobile */}
      <header
        ref={headerRef}
        className={`flex lg:hidden justify-between items-center  bg-white relative py-3 px-5  w-full `}
      >
         <Link href="/">
          <div className="w-36 h-12 bg-black"></div>
        </Link>

        {visible ? (
          <div
            className={`${
              visible ? style.drop_visible : ""
            } transition-all duration-300 bg-white z-50 shadow-lg lg:shadow-none 
                          px-6 lg:px-0 py-10 lg:py-0 w-full lg:w-auto absolute left-0 top-14 md:top-28 lg:top-0 lg:static  flex-col 
                          lg:flex-row justify-between lg:items-center lg:space-x-24`}
          >
            <ul className="flex flex-col gap-6 lg:flex-row space-y-2 lg:space-y-0">
              <Link href="/" className="text-black text-base font-medium">
                About Us
              </Link>
              <Link href="/" className="text-black text-base font-medium">
                Events
              </Link>
              <Link href="/" className="text-black text-base font-medium">
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
                          appearance-none outline-none text-3xl md:text-4xl lg:hidden 
                          cursor-default transition-all duration-300 hover:opacity-70 
                          focus:ring-2 focus:ring-offset-2  bg-blue
                          rounded-lg p-2 md:p-1 flex justify-center items-center box-border w-9 h-9
                          md:h-12 md:w-16`}
          >
          </button>

      </header>
    </div>
  );
};

export default Header;
