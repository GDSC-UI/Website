import Button from "@/components/ui/Button"
import { Gallery } from "@/components/ui/gallery"
import { HeroImage } from "@/components/ui/hero-image"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: `Gallery`,
}

export default function Page() {
  return (
    <div>
      <HeroImage />
      <Section heading="our gallery" content="Feed your eyes">
        <p>Relive our inspiring experiences in pixels.</p>
      </Section>
      <section className="mx-[7.5rem] space-y-10 mber-20">
        <Gallery />
        <div className="text-center">
          <Button variant="outline">See more photos</Button>
        </div>
      </section>
    </div>
  )
}
