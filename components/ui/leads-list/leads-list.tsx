import { FourColGrid } from "@/components/ui/grid-container"
import productDesignSrc from "./leads/product-design.jpg"
import dataScienceSrc from "./leads/data-science.jpg"
import cloudSrc from "./leads/cloud.jpg"
import frontendSrc from "./leads/frontend.jpg"
import dataAnalystSrc from "./leads/data-analyst.jpg"
import hardwareSrc from "./leads/hardware.jpg"
import aiSrc from "./leads/ai.jpg"
import flutterSrc from "./leads/flutter.jpg"
import productManagementSrc from "./leads/product-management.jpg"
import softwareQASrc from "./leads/software-qa.jpg"
import backendSrc from "./leads/backend.jpg"
import SpeakerCard from "@/components/shared/speaker"

const LEADS = [
  {
    name: `Obaloluwa Animashaun`,
    title: `Product Design(UI/UX ) Lead`,
    src: productDesignSrc,
  },
  {
    name: `Olaojo Paul`,
    title: `Data Science and Engineering Lead`,
    src: dataScienceSrc,
  },
  {
    name: `Prince Ogabi`,
    title: `Cloud Development Lead`,
    src: cloudSrc,
  },
  {
    name: `Showunmi Segun`,
    title: `Frontend Development Lead`,
    src: frontendSrc,
  },
  {
    name: `Umoren Ememobong`,
    title: `Data Analyst Lead`,
    src: dataAnalystSrc,
  },
  {
    name: `Busoye Matthew`,
    title: `Hardware/IOT Lead`,
    src: hardwareSrc,
  },
  {
    name: `Jenrola Odunolaoluwa`,
    title: `AI Lead`,
    src: aiSrc,
  },
  {
    name: `Jesutoni Aderibigbe`,
    title: `Flutter Lead`,
    src: flutterSrc,
  },
  {
    name: `Victor Afia`,
    title: `Product Management Lead`,
    src: productManagementSrc,
  },
  {
    name: `Temidayo Akintoye`,
    title: `Software QA Engineering Lead`,
    src: softwareQASrc,
  },
  {
    name: `William Nnamani`,
    title: `Backend Development Lead`,
    src: backendSrc,
  },
]

export function LeadsList() {
  return (
    <div>
      <FourColGrid>
        {LEADS.map((lead) => (
          <SpeakerCard key={lead.name} {...lead} />
        ))}
      </FourColGrid>
    </div>
  )
}
