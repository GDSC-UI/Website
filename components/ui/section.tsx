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
    className={cn(
      `space-y-8 text-center md:px-[7.5rem] md:max-w-5xl mx-auto px-5 py-10`,
      className
    )}
  >
    {content && <p className="font-medium">{content}</p>}
    <h1 className="text-3xl md:text-5xl capitalize max-w-xl mx-auto mb-5">
      {heading}
    </h1>
    {children}
  </section>
);
