import { Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PastEvents() {
  return (
    <article className="bg-lightblue py-20 px-8 md:px-[7.5rem] space-y-10">
      <div className="space-y-5">
        <h2>Directory of Past Events</h2>
        <header className="bg-white p-5 flex max-sm:justify-start max-sm:gap-4 justify-evenly items-center flex-wrap md:flex-nowrap">
          <p>Take a peak at the good and mischief weʼve been up to lately</p>
          <label className="flex items-center bg-lightblue pl-2 rounded-[.5rem]">
            <Search />
            <input
              type="search"
              placeholder="Search"
              className="p-2 placeholder:text-black rounded-[.5rem] bg-inherit focus:placeholder:opacity-65 w-40"
              id="search"
            />
          </label>
          <Dropdown />
        </header>
      </div>
      <main>
        <PastEventCardsView />
      </main>
    </article>
  )
}

function Dropdown() {
  return (
    <Select>
      <SelectTrigger className="w-28">
        <SelectValue placeholder="All years" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Years</SelectLabel>
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2022">2022</SelectItem>
          <SelectItem value="2021">2021</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function PastEventCard() {
  return (
    <div className="rounded-2xl p-5 bg-white flex gap-[1.25rem] max-md:flex-col max-md:items-center">
      <div className="bg-lightgrey rounded-lg h-52 w-72 max-w-full"></div>
      <div className="self-center">
        <h3>Global Gamers Challenge by Flutter and Global Citizen</h3>
        <span className="inline-block">
          {new Date().toDateString()} | X space
        </span>
        <p className="text-grey">
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu.
        </p>
      </div>
    </div>
  )
}

function PastEventCardsView() {
  return (
    <section className="space-y-10">
      {[1, 2, 3].map((num) => (
        <PastEventCard key={num} />
      ))}
    </section>
  )
}
