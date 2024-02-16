import Organizers from "@/components/homepage/organizers";
import Gallery from "@/components/homepage/organizers/gallery";
import { Section } from "@/components/ui/section";

export default function Page() {
  return ( <section className="">
          <div className="h-80 bg-gray-400 md:mx-28 my-20"></div>

         <Section
        content="How does GDSC help?"
        heading="Developer Student Club University of Ibadan - Events"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit
          enim nibh ac neque viverra. Scelerisque neque elit tempus metus
          interdum luctus eget eu. Senectus lorem nec habitasse libero senectus
          proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis
          fermentum volutpat.
        </p>

        <p>
   Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. 
   Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat. Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat.
        </p>
      </Section>

      <section className="bg-gray-100 py-20 flex justify-between md:px-28 px-6 gap-4">

        <div className="text-center">
          <p className="">Since</p>
          <h5 className="text-3xl font-bold mt-4  md:text-5xl">2019</h5>
        </div>

        <div className="text-center">
          <p className="">Members</p>
          <h5 className="text-3xl font-bold mt-4 md:text-5xl">200+</h5>
        </div>

        <div className="text-center">
          <p className="">Events</p>
          <h5 className="text-3xl font-bold mt-4  md:text-5xl">200+</h5>
        </div>

        <div className="text-center">
          <p className="">Organizers</p>
          <h5 className="text-3xl font-bold  mt-4 md:text-5xl">200+</h5>
        </div>

      </section>


      <section className="md:px-28 py-10">
        <h3 className="font-bold text-3xl md:text-5xl mx-auto text-center">Our Values</h3>
      <p className="max-w-3xl mx-auto text-center mt-4">Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu.</p>

      <div className="flex justify-center flex-wrap mt-8">
          <div className="border-l border-t border-b border-blue w-72 h-96 py-10 px-6">
            <h4 className="font-bold text-2xl ">Our Mission</h4>
            <p className="text-grey pt-5 font-light">Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec </p>
          </div>
          <div className="border-l border-t border-b border-green w-72 py-10 px-6">
            <h4 className="font-bold text-2xl ">Our Mission</h4>
            <p className="text-grey pt-5 font-light">Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec </p>
          </div>
          <div className="border-l border-t border-b border-yellow w-72 py-10 px-6">
            <h4 className="font-bold text-2xl ">Our Mission</h4>
            <p className="text-grey pt-5 font-light">Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec </p>
          </div>
          <div className="border border-red w-72 py-10 px-6">
            <h4 className="font-bold text-2xl ">Our Mission</h4>
            <p className="text-grey pt-5 font-light">Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec </p>
          </div>
        </div>
      </section>


      <Organizers />
      <Gallery />



  </section> );
}
 
