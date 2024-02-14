import { FlexContainer } from "@/components/ui/flex-container"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: `Next Hack`,
}

export default function Page() {
  return (
    <div>
      <FlexContainer heading="next hack" period={new Date().toDateString()}>
        Register now
      </FlexContainer>
      <Section
        content="what area/problem are you focusing on"
        heading="Theme & Challenges"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat. Lorem ipsum dolor sit amet consectetur. Egestas
          turpis integer et sit enim nibh ac neque viverra. Scelerisque neque
          elit tempus metus interdum luctus eget eu. Senectus lorem nec
          habitasse libero senectus proin velit. Dis aliquam convallis donec
          adipiscing pulvinar enim duis fermentum volutpat.
        </p>
      </Section>
      <Section
        content="what area/problem are you focusing on?"
        heading="Theme & Challenges"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat. Lorem ipsum dolor sit amet consectetur. Egestas
          turpis integer et sit enim nibh ac neque viverra. Scelerisque neque
          elit tempus metus interdum luctus eget eu. Senectus lorem nec
          habitasse libero senectus proin velit. Dis aliquam convallis donec
          adipiscing pulvinar enim duis fermentum volutpat.
        </p>
      </Section>
      <Section
        content="How and when to register"
        heading="Registration Process"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat
        </p>
        <div className="h-[400px] border border-black"></div>
      </Section>
    </div>
  )
}
