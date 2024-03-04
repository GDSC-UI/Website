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
  { name: `Adams  Paul`, src: paulSrc, title: `Engineering Manager, Selar` },
  { name: `Akinkunmi Gafar`, src: gafarSrc, title: `CEO, Interpocket` },
  {
    name: `Dara Sobaloju`,
    src: daraSrc,
    title: `Product Designer,
  Treepz Inc`,
  },
  {
    name: `David Oladapo`,
    src: davidSrc,
    title: `Growth Manager,
  Clane`,
  },
  {
    name: `Kayode Idowu`,
    src: kayodeSrc,
    title: `Founder of Mayhaven,
  COO, Cudium`,
  },
  {
    name: `Mekuleyi Micheal`,
    src: michaelSrc,
    title: `Snr DevOps Engineer,
  Keynote Speaker`,
  },
  {
    name: `Ntongha Alagba`,
    src: alagbaSrc,
    title: `Growth specialist,
  Norebase`,
  },
  {
    name: `Ajadi Joshua`,
    src: joshuaSrc,
    title: `CEO & Co-founder,
  District 7`,
  },
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
