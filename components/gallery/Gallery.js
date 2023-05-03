import galleryImageOne from "@/public/images/gallery/1.jpg";
import galleryImageTwo from "@/public/images/gallery/2.jpg";
import galleryImageThree from "@/public/images/gallery/3.jpg";
import GalleryItem from "./GalleryItem";

const galleryList = [
  { id: 0, src: galleryImageOne, alt: "a photo of a woman" },
  { id: 1, src: galleryImageTwo, alt: "a photo of a woman" },
  { id: 2, src: galleryImageThree, alt: "a photo of a woman" },
];

const Gallery = () => {
  const renderedGallery = galleryList.map((item) => (
    <GalleryItem key={item.id} src={item.src} alt={item.src} />
  ));
  return <section className="flex">{renderedGallery}</section>;
};

export default Gallery;
