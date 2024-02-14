import Button from "@/components/ui/Button";

const Gallery = () => {
  return ( 
  <section  className="text-center px-6 py-10 md:px-28 font-primary">
      <h4 className="max-w-xl mx-auto pt-10 text-3xl md:text-5xl">
      Our Gallery
      </h4>
      <div className="w-full h-80 bg-lightblue my-6"></div>
      <div className="max-w-3xl mx-auto text-center mt-5">
        <p className="font-light">
        Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat.
        </p>
        <p className="font-light pt-6">
        Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat. Lorem ipsum dolor sit amet consectetur. Egestas turpis integer et sit enim nibh ac neque viverra. Scelerisque neque elit tempus metus interdum luctus eget eu. Senectus lorem nec habitasse libero senectus proin velit. Dis aliquam convallis donec adipiscing pulvinar enim duis fermentum volutpat.
        </p>

        <Button
          variant="primary"
          className="w-[196px] h-14 font-medium inline-block mt-6"
        >
          Join GDSC UNIBAN
        </Button>

        <Button
          variant="transparent"
          className="w-[196px] h-14 font-medium inline-block ml-6 mt-6"
        >
          Join GDSC UNIBAN
        </Button>
        </div>

  </section> );
}
 
export default Gallery;