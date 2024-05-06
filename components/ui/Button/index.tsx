import { cn } from "@/lib/utils"
import Link from "next/link"
import React, { ComponentPropsWithRef } from "react"

interface Props {
  children?: React.ReactNode
  className?: string
  variant?: "default" | "primary" | "transparent" | "filter" | "outline"
  isLoading?: boolean
  asLink?: string
  type?: "button" | "submit" | "reset"

  onClick?: () => void
}

const Button = React.forwardRef(
  (
    {
      children,
      asLink,
      className,
      variant = "primary",
      type,
      isLoading,
      ...rest
    }: Props & ComponentPropsWithRef<"button">,
    ref: any
  ) => {
    const variants = {
      default: "px-4 py-2 md:py-2  rounded-lg  block ",
      primary: "px-6 py-4 bg-blue hover:bg-blue duration-100  text-white block",
      transparent:
        "px-4 py-2 md:py-2 bg-transparent hover:bg-blue hover:text-white border border-blue active:bg-blue-active text-blue block",
      outline: "px-4 py-2 border border-blue text-blue",
      filter:
        "px-4 py-2 md:py-2 bg-transparent hover:bg-blue-primary hover:text-white font-bold active:bg-blue-active text-primary-100 text-opacity-50  rounded-lg block",
    }

    return (
      <>
        {asLink ? (
          <Link href={asLink}>
            <button
              ref={ref}
              className={cn(
                `hover:opacity-90 appearance-none  font-bold  text-sm disabled:opacity-50 text-center active:opacity-80 transition-all duration-300`,
                className,
                variants[variant]
              )}
              {...rest}
            >
              {children}
            </button>
          </Link>
        ) : (
          <button
            ref={ref}
            type={type}
            className={cn(
              `hover:opacity-90 appearance-none  font-bold  text-sm disabled:opacity-50 text-center active:opacity-80 transition-all duration-300`,
              className,
              variants[variant]
            )}
            {...rest}
          >
            <React.Fragment>{children}</React.Fragment>
          </button>
        )}
      </>
    )
  }
)
Button.displayName = "Button"

export default Button
