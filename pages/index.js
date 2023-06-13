import Image from "next/image";
import Link from "next/link";

export default function Home({ products }) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image src="/images/home/1.jpg" width={1600} height={1000} />
        <Link
          href={"/home"}
          className="absolute left-1/2 -translate-x-1/2 top-3/4  "
        >
          <button className=" md:py-1 lg:py-2 px-8 md:px-12 lg:px-16 border-2 md:text-lg lg:text-2xl border-white text-white hover:text-gray-200 hover:border-gray-200 duration-200">
            المتجر
          </button>
        </Link>
      </div>
      <Image src="/images/home/2.jpg" width={1600} height={1000} />
      <Image src="/images/home/3.jpg" width={1600} height={1000} />
      <Image src="/images/home/4.jpg" width={1600} height={1000} />
      <Image src="/images/home/5.jpg" width={1600} height={1000} />
      <Image src="/images/home/6.jpg" width={1600} height={1000} />
    </div>
  );
}
