import Image from "next/image";

const GalleryItem = ({ src, alt }) => {
  return (
    <div>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default GalleryItem;
