import Image from "next/image";
import Link from "next/link";
import { IoCart, IoPerson } from "react-icons/io5";
import HeaderForm from "./HeaderForm";
import logoImage from "@/public/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between pt-2 sm:pt-0 lg:px-0 items-center flex-wrap h-24 sm:h-20">
      <div>
        <Link
          href="/"
          className="w-16 h-16  block relative overflow-hidden mr-2"
        >
          <Image src={logoImage} alt="Pure Derma Logo" />
        </Link>
      </div>
      <HeaderForm />
      <nav className="flex items-center basis-24">
        <Link
          href="/cart"
          className="flex items-center justify-center hover:bg-gray-light-2 h-16 sm:h-20 px-2 basis-16 relative"
        >
          <IoCart size={24} />
          <span className="bg-primary h-4 w-4 rounded-full absolute top-4 sm:top-6 right-0 text-white flex items-center justify-center font-thin text-xs">
            1
          </span>
        </Link>
        <Link
          href="/user-profile"
          className="flex items-center gap-2 justify-start hover:bg-gray-light-2 h-16 sm:h-20 px-2 basis-16"
        >
          <IoPerson size={24} />
          <span>عبدالفضيل</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
