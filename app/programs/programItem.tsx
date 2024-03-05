import Button from "@/components/ui/Button"
import Image from "next/image"
interface ProgramItemProps {
  title: string
  description: string
  about: Array<string>
  route: string
  background?: boolean
  reverse?: boolean
}

const ProgramItem = ({
  title,
  description,
  about,
  route,
  background,
  reverse,
}: ProgramItemProps) => {
  return (
    <div
      className={` flex flex-wrap md:px-28 px-6 items-center gap-5  justify-between  py-16 ${background ? "bg-lightblue" : null} ${reverse ? "flex-row-reverse" : null}`}
    >
      <div className="bg-lightgrey w-full h-80 md:w-[570px] md:h-[540px]"></div>
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-5xl">{title}</h1>
        <p className="text-grey py-6">{description}</p>

        <ul>
          {about.map((item, index) => (
            <div
              key={index}
              className="flex items-center  gap-4 text-base mb-5"
            >
              <div className="max-w-[15%]">
                <Image
                  src="/tick-square.svg"
                  width={30}
                  height={30}
                  alt="ticker square"
                  className=" "
                />
              </div>{" "}
              <span className="text-base max-w-[84%]  md:max-w-lg">
                {" "}
                {item}
              </span>
            </div>
          ))}
        </ul>

        <Button className="w-[121px] h-[56px] text-base mt-10" asLink={route}>
          See more
        </Button>
      </div>
    </div>
  )
}

export default ProgramItem
