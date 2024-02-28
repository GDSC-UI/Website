import Image from "next/image"
import { ComponentPropsWithoutRef } from "react"

type ImageProps = ComponentPropsWithoutRef<typeof Image>

export const MyImage = (props: ImageProps) => (
  <Image {...props} quality={100} placeholder="blur" />
)
