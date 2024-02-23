"use client"

import { ICONS } from "./icons"

export function Socials() {
  return (
    <ul className="flex gap-6">
      {[...ICONS].map(([icon, link]) => (
        <li key={link}>
          <a
            href={link}
            target="_blank"
            className="bg-lightgrey p-[.44rem] rounded-full hover:opacity-80 transition-opacity inline-block"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
