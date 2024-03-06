import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
            <AccordionTrigger className="">What is GDSC?</AccordionTrigger>
            <AccordionContent>
              GDSC stands for Google Developer Student Clubs, which are
              community groups for students interested in Google developer
              technologies. These clubs provide opportunities to learn, share
              knowledge, and engage in hands-on projects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="">Who can join GDSC?</AccordionTrigger>
            <AccordionContent className="">
              Any student passionate about technology, regardless of their major
              or background, can join GDSC. Whether you`&apos;`re a beginner or
              an experienced developer, GDSC welcomes everyone who wants to
              learn and contribute.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="">
              How can I get involved with GDSC?
            </AccordionTrigger>
            <AccordionContent className="">
              To get involved, simply attend our events, join our community
              discussions, and participate in our projects. You can also become
              a GDSC member or apply to be part of the leadership team when
              opportunities arise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="">
              Are there any membership requirements for GDSC?
            </AccordionTrigger>
            <AccordionContent className="font-medium">
              GDSC membership is open to all students and there are no specific
              requirements to join. We encourage active participation and
              enthusiasm for learning and sharing knowledge.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="">
              How can I stay updated about GDSC events and activities?
            </AccordionTrigger>
            <AccordionContent className="font-medium">
              To stay updated, follow us on social media platforms such as
              Twitter, Facebook, and Instagram, and join our mailing list. You
              can also check our website regularly for event announcements and
              updates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FAQS
