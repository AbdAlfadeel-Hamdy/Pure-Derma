import Image from "next/image";
import Link from "next/link";
import imageOne from "@/public/images/home/1.png";
import imageTwo from "@/public/images/home/2.png";
import imageThree from "@/public/images/home/3.png";
import imageFour from "@/public/images/home/4.png";
import imageFive from "@/public/images/home/5.png";
import imageSix from "@/public/images/home/6.png";
import facebookImage from "@/public/images/home/facebook.png";
import tiktokImage from "@/public/images/home/tiktok.png";
import instagramImage from "@/public/images/home/instagram.png";

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
      <div className="relative">
        <Image src={imageSix} />
        <div
          dir="ltr"
          className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 absolute top-3/4 left-[60%] lg:left-[65%] "
        >
          <a
            href="https://web.facebook.com/puredermaeg
"
          >
            <Image
              src={facebookImage}
              width={100}
              height={100}
              className="w-10 sm:w-16 md:w-20 lg:w-24"
            />
          </a>
          <a
            href="https://www.tiktok.com/@puredermaeg
"
          >
            <Image
              src={tiktokImage}
              width={100}
              height={100}
              className="w-10 sm:w-16 md:w-20 lg:w-24"
            />
          </a>
          <a href="https://www.instagram.com/puredermaeg/">
            <Image
              src={instagramImage}
              width={100}
              height={100}
              className="w-10 sm:w-16 md:w-20 lg:w-24"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
