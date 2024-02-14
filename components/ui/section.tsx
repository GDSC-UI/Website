import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = ({
  children,
  content,
  heading,
  className,
}: PropsWithChildren & {
  heading: string;
  content?: string;
  className?: string;
}) => (
  <section
    className={cn(`my-20 space-y-10 text-center px-[7.5rem] py-20`, className)}
  >
    {content && <p className="font-medium">{content}</p>}
    <h1 className="text-5xl capitalize">{heading}</h1>
    {children}
  </section>
);
