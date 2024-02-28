import SpeakerCard from "@/components/shared/speaker"
import { FourColGrid } from "@/components/ui/grid-container"
import paulSrc from "./speakers-images/paul.jpg"
import gafarSrc from "./speakers-images/gafar.jpg"
import daraSrc from "./speakers-images/dara.jpg"
import davidSrc from "./speakers-images/david.jpg"
import kayodeSrc from "./speakers-images/kayode.jpg"
import michaelSrc from "./speakers-images/michael.jpg"
import alagbaSrc from "./speakers-images/alagba.jpg"
import joshuaSrc from "./speakers-images/joshua.jpg"

const SPEAKERS = [
  { name: `Adams  Paul`, src: paulSrc },
  { name: `Akinkunmi Gafar`, src: gafarSrc },
  { name: `Dara Sobaloju`, src: daraSrc },
  { name: `David Oladapo`, src: davidSrc },
  { name: `Kayode Idowu`, src: kayodeSrc },
  { name: `Mekuleyi Micheal`, src: michaelSrc },
  { name: `Ntongha Alagba`, src: alagbaSrc },
  { name: `Ajadi Joshua`, src: joshuaSrc },
]

export function SpeakerCardsView() {
  return (
    <FourColGrid>
      {SPEAKERS.map((speaker) => (
        <SpeakerCard key={speaker.name} {...speaker} />
      ))}
    </FourColGrid>
  )
}
