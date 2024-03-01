import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <section className="px-4 md:px-28 md:py-20 py-16">
      <p className="font-medium text-center mb-4 text-blue">
        Have any questions?
      </p>
      <h3 className="font-bold md:text-5xl text-3xl text-blue mt-6 text-center">
        FAQs
      </h3>

      <div className="md:w-8/12 mx-auto mt-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="">Who is GDSC?</AccordionTrigger>
            <AccordionContent className="font-medium">
              Who is GDSC?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="">Question 1</AccordionTrigger>
            <AccordionContent className="font-medium">
              Who is GDSC?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="">Question 1</AccordionTrigger>
            <AccordionContent className="font-medium">
              Who is GDSC?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="">Question 1</AccordionTrigger>
            <AccordionContent className="font-medium">
              Who is GDSC?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQS;
