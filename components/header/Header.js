import Image from "next/image";
import Link from "next/link";
import { IoCart, IoPerson } from "react-icons/io5";
import HeaderForm from "./HeaderForm";
import logoImage from "@/public/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between pt-2 md:px-8 items-center flex-wrap h-24">
      <div>
        <Link
          href="/"
          className="w-16 h-16 md:w-24 md:h-24 block relative overflow-hidden"
        >
          <Image src={logoImage} alt="Pure Derma Logo" />
        </Link>
      </div>
      <HeaderForm />
      <nav className="flex items-center basis-24">
        <div className="flex items-center justify-center hover:bg-gray-light-2 h-16 px-2 basis-16">
          <IoCart size={24} />
        </div>
        <div className="flex items-center justify-center hover:bg-gray-light-2 h-16 px-2 basis-16">
          <IoPerson size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
