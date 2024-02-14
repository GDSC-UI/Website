import { PropsWithChildren } from "react";
import Button from "./Button";

export function FlexContainer({
  heading,
  period,
  buttonText,
}: PropsWithChildren & {
  heading: string;
  period: string;
  buttonText: string;
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
        <Button>{buttonText}</Button>
      </div>
      <div className="size-[400px] bg-gray-200 border border-blue"></div>
    </div>
  );
}
