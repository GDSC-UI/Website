import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react"

export const TwobyTwoGrid = ({
  className,
  children,
}: PropsWithChildren & { className?: string }) => (
  <main
    className={cn(
      `grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center`,
      className
    )}
  >
    {children}
  </main>
)

type GridProps = ComponentPropsWithoutRef<typeof TwobyTwoGrid>
export const FourColGrid = ({ children }: GridProps) => (
  <TwobyTwoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {children}
  </TwobyTwoGrid>
)
