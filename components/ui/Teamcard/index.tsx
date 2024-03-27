import Image, { StaticImageData } from "next/image"
import fontStyle from "./font.module.css"

interface TeamCardProps {
  name: string
  description: string
  role: string
  github?: any
  twitter?: any
  website?: any
  linkedIn?: any
  image: StaticImageData
}

const TeamCard = ({
  name,
  role,
  description,
  github,
  twitter,
  website,
  linkedIn,
  image,
}: TeamCardProps) => {
  return (
    <div className="flex flex-wrap-reverse justify-center items-start gap-4 md:w-[36rem] mx-auto p-2">
      <div className="max-w-64">
        <h2 className="text-2xl md:leading-loose md:text-3xl max-w-56">
          {name}
        </h2>
        <p className={`text-[22px] my-5 ${fontStyle.roboto_mono}`}>{role}</p>
        <p className={`text-sm text-grey`}>{description}</p>

        <div className="flex mt-4 gap-4">
          <a
            href={linkedIn}
            target="_blank"
            className="bg-lightgrey p-[.44rem] rounded-full hover:opacity-80 transition-opacity inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M11.0833 1.75C11.3928 1.75 11.6895 1.87292 11.9083 2.09171C12.1271 2.3105 12.25 2.60725 12.25 2.91667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H11.0833ZM10.7917 10.7917V7.7C10.7917 7.19565 10.5913 6.71195 10.2347 6.35532C9.87805 5.99869 9.39435 5.79833 8.89 5.79833C8.39417 5.79833 7.81667 6.10167 7.53667 6.55667V5.90917H5.90917V10.7917H7.53667V7.91583C7.53667 7.46667 7.89833 7.09917 8.3475 7.09917C8.56409 7.09917 8.77182 7.18521 8.92497 7.33836C9.07812 7.49152 9.16417 7.69924 9.16417 7.91583V10.7917H10.7917ZM4.01333 4.99333C4.27325 4.99333 4.52251 4.89008 4.7063 4.7063C4.89008 4.52251 4.99333 4.27325 4.99333 4.01333C4.99333 3.47083 4.55583 3.0275 4.01333 3.0275C3.75187 3.0275 3.50112 3.13136 3.31624 3.31624C3.13136 3.50112 3.0275 3.75187 3.0275 4.01333C3.0275 4.55583 3.47083 4.99333 4.01333 4.99333ZM4.82417 10.7917V5.90917H3.20833V10.7917H4.82417Z"
                fill="#4285F4"
              />
            </svg>
          </a>

          <a
            href={github}
            target="_blank"
            className="bg-lightgrey p-[.44rem] rounded-full hover:opacity-80 transition-opacity inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.8332 6.99984C12.8332 3.77984 10.2198 1.1665 6.99984 1.1665C3.77984 1.1665 1.1665 3.77984 1.1665 6.99984C1.1665 9.82317 3.17317 12.174 5.83317 12.7165V8.74984H4.6665V6.99984H5.83317V5.5415C5.83317 4.41567 6.749 3.49984 7.87484 3.49984H9.33317V5.24984H8.1665C7.84567 5.24984 7.58317 5.51234 7.58317 5.83317V6.99984H9.33317V8.74984H7.58317V12.804C10.529 12.5123 12.8332 10.0273 12.8332 6.99984Z"
                fill="#4285F4"
              />
            </svg>
          </a>

          <a
            href={twitter}
            target="_blank"
            className="bg-lightgrey p-[.44rem] rounded-full hover:opacity-80 transition-opacity inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M10.6198 1.3125H12.5495L8.33373 6.13083L13.2932 12.6875H9.4094L6.3679 8.71092L2.88773 12.6875H0.956901L5.46607 7.53375L0.708984 1.3125H4.69023L7.43948 4.94725L10.6198 1.3125ZM9.94257 11.5325H11.0118L4.10982 2.40683H2.9624L9.94257 11.5325Z"
                fill="#4285F4"
              />
            </svg>
          </a>
        </div>
      </div>
      <Image src={image} alt={name} className="" width={280} height={300} />
    </div>
  )
}

export default TeamCard
