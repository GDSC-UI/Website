import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react"
import Button from "./Button"
import { RotatedImage } from "./rotated-image"

export function FlexContainer({
  heading,
  period,
  children,
}: PropsWithChildren & {
  heading: string
  period: string
}) {
  return (
    <div className="flex gap-16 bg-lightblue px-[7.5rem] items-center justify-center">
      <div className="space-y-5 py-[7.5rem] basis-1/2">
        <h1 className="capitalize">{heading}</h1>
        <span className="inline-block font-bold">{period}</span>
        {children}
      </div>
      <div className="isolate">
        <RotatedImage />
      </div>
    </div>
  )
}

type FlexContainerProps = ComponentPropsWithoutRef<typeof FlexContainer>

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
