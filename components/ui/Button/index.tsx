import Link from "next/link";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "black" | "primary" | "transparent" | "filter";
  isLoading?: boolean;
  asLink?: string;
  onClick?: () => void;
}

const Button = React.forwardRef(
  (
    {
      children,
      asLink,
      className,
      variant = "default",
      isLoading,
      ...rest
    }: Props,
    ref: any
  ) => {
    const variants = {
      black:
        "px-4 md:px-6 py-1 md:py-2 bg-black text-white rounded-lg w-full block hover:bg-black active:bg-black",
      default: "px-4 py-2 md:py-2  rounded-lg  block",
      primary:
        "px-4 py-2 md:py-2 bg-blue hover:bg-blue duration-100  text-white block",
      transparent:
        "px-4 py-2 md:py-2 bg-transparent hover:bg-blue-accent hover:text-white border border-blue-primary active:bg-blue-active text-blue-primary  rounded-lg block",
      filter:
        "px-4 py-2 md:py-2 bg-transparent hover:bg-blue-primary hover:text-white font-bold active:bg-blue-active text-primary-100 text-opacity-50  rounded-lg block",
    };

    return (
      <>
        {asLink ? (
          <Link href={asLink}>
            <button
              ref={ref}
              className={`hover:opacity-90 appearance-none  font-bold  text-sm disabled:opacity-50 text-center active:opacity-80 transition-all duration-300 ${className} ${variants[variant]}`}
              {...rest}
            >
              {children}
            </button>
          </Link>
        ) : (
          <button
            ref={ref}
            className={` appearance-none  text-sm 2xl:text-lg disabled:opacity-50 text-center active:opacity-80 transition-all duration-300 ${className} ${variants[variant]}`}
            {...rest}
          >
            <React.Fragment>{children}</React.Fragment>
          </button>
        )}
      </>
    );
  }
);

export default Button;
