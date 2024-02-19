import Button from "@/components/ui/Button";
import TeamCard from "@/components/ui/Teamcard";
import organizers from "@/public/data/organizers.json";

export const metadata = {
  title: `Organizers`,
};

export default function Page() {
  return (
    <div>
      <section className="bg-lightblue px-8 md:px-20 py-20">
        <div className="bg-lightgrey w-full h-80 my-10"></div>
        <h3 className="font-bold text-3xl md:text-5xl max-w-2xl mx-auto text-center">
          Without them, there would be no app or website
        </h3>
        <p className="max-w-xl mx-auto text-center mt-4">
          Here are profile of the amazing people who worked on the website
        </p>
      </section>
      <section className="bg-white">
        <nav className="flex py-10 px-10 md:px-28 justify-between items-center border-b border-blue">
          <button className="bg-lightblue uppercase w-52 h-20 text-blue text-2xl">
            the {`  `} team
          </button>

          <ul className="flex gap-10">
            <button className="text-base ">All</button>
            <button className="text-base ">Managers</button>
            <button className="text-base ">Organizers</button>
            <button className="text-base ">Development</button>
          </ul>

          <Button
            variant="primary"
            className="w-36 md:w-[196px] h-14 font-medium inline-block"
          >
            Join GDSC UNIBAN
          </Button>
        </nav>

        <div className="flex justify-evenly py-10 gap-8 flex-wrap">
          {organizers.map((item) => (
            <TeamCard
              key={item.name}
              name={item.name}
              role={item.role}
              description={item.description}
              image={item.image}
              github={item.github}
              linkedIn={item.github}
              twitter={item.twitter}
              portfolio={item.twitter}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
//
