import { TwobyTwoGrid } from "@/components/ui/grid-container"
import { MyImage } from "@/components/ui/image"
import panelOne from "./techquest-images/panel_1.jpg"
import panelTwo from "./techquest-images/panel_2.jpg"

export function PanelView() {
  return (
    <TwobyTwoGrid className="gap-28">
      {[panelOne, panelTwo].map((image, idx) => (
        <MyImage
          key={crypto.randomUUID()}
          src={image}
          alt={`TechQuest panel session ${idx + 1} cover photo`}
        />
      ))}
    </TwobyTwoGrid>
  )
}
