import {
  ComponentPropsWithRef,
  PropsWithChildren,
  PropsWithRef,
  ReactNode,
} from "react"
import Button from "./Button"

export function FlexContainer({
  heading,
  period,
  children,
}: PropsWithChildren & {
  heading: string
  period: string
}) {
  return (
    <div className="flex gap-16 bg-gray-100 px-[7.5rem] items-center justify-center">
      <div className="space-y-5 py-[7.5rem] basis-1/2">
        <h1 className="capitalize">{heading}</h1>
        <span className="font-bold inline-block">{period}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat.
        </p>
        {children}
      </div>
      <div className="size-[400px] bg-gray-200 border border-blue"></div>
    </div>
  )
}

type FlexContainerProps = ComponentPropsWithRef<typeof FlexContainer>

export const FlexContainerWithButton = ({
  children,
  ...restProps
}: FlexContainerProps) => {
  return (
    <FlexContainer {...restProps}>
      <Button>{children}</Button>
    </FlexContainer>
  )
}

export const CenteredBox = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center">{children}</div>
)
