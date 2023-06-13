import Image from "next/image";
import Link from "next/link";
import imageOne from "@/public/images/home/1.png";
import imageTwo from "@/public/images/home/2.png";
import imageThree from "@/public/images/home/3.png";
import imageFour from "@/public/images/home/4.png";
import imageFive from "@/public/images/home/5.png";
import imageSix from "@/public/images/home/6.png";

export default function Home({ products }) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image src={imageOne} />
        <Link
          href={"/home"}
          className="absolute left-1/2 -translate-x-1/2 top-3/4  "
        >
          <button className=" md:py-1 lg:py-2 px-8 md:px-12 lg:px-16 border-2 md:text-lg lg:text-2xl border-white text-white hover:text-gray-200 hover:border-gray-200 duration-200">
            المتجر
          </button>
        </Link>
      </div>
      <Image src={imageTwo} />
      <Image src={imageThree} />
      <Image src={imageFour} />
      <Image src={imageFive} />
      <Image src={imageSix} />
    </div>
  );
}
