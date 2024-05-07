import { JoinButton } from "@/components/ui/Button/join-button"
import { PhotosGrid } from "@/ui/photos-grid/photos-grid"

const Gallery = () => {
  return (
    <section className="text-center px-6 py-10 md:px-28 relative ">
      <PhotosGrid />

      <div className="max-w-3xl mx-auto text-center mt-5 space-y-8">
        <h4 className="text-3xl md:text-5xl">Our Gallery</h4>

        <p className="font-normal mt-5 text-grey">
          A picture is worth a thousand words, they say. So, why don&apos;t you
          dive into our gallery to see for yourself what we do and how we do it?
        </p>
        <JoinButton />
      </div>
    </section>
  )
}

export default Gallery
