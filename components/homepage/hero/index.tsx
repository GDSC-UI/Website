import Button from "@/components/ui/Button"
import { RotatedImage } from "@/components/ui/rotated-image"
import imageSrc from "public/home-hero.jpg"

const Hero = () => {
  return (
    <div className="flex flex-wrap p-6 md:p-28 items-center gap-10  bg-lightblue">
      <div className="left max-w-xl">
        <h1 className="font-bold text-3xl md:text-6xl">
          Empowering young minds to build the future.
        </h1>
        <p className="text-black font-normal text-base pt-4 max-w-xl">
          We believe in the power of connections, the thrill of learning, and
          the joy of growth. This is where innovation meets collaboration,
          curiosity ignites knowledge, and where challenges fuel progress.
        </p>
        <Button
          asLink="https://gdsc.community.dev/university-of-ibadan/"
          variant="primary"
          className="w-[144px] h-14 font-medium inline-block mt-4"
        >
          Explore Now
        </Button>
      </div>
      <div className="isolate">
        <RotatedImage
          imageProp={{
            src: imageSrc,
            alt: `Photo of one of the GDSCUI leads  at the techquest event`,
          }}
        />
      </div>
    </div>
  )
}

export default Hero
