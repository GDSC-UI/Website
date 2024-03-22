import Image from "next/image"
import Link from "next/link"

interface ProgramCardProps {
  title: string
  description: string
  route: string
  classnames?: any
  image: string
}
const ProgramCard = ({
  title,
  description,
  route,
  image,
  classnames,
}: ProgramCardProps) => {
  return (
    <div className={`w-full md:w-[36.5rem] bg-white ${classnames}`}>
      <Image
        src={image}
        width={580}
        height={250}
        className="w-full h-52"
        alt={title}
      />
      <div className="p-5">
        <h3 className="font-bold pt-5 text-2xl">{title}</h3>
        <p className="font-light text-grey py-5">{description}</p>
        <Link
          href={route}
          className="font-normal text-base text-blue pt-8 hover:font-bold duration-100 transition-all"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default ProgramCard
