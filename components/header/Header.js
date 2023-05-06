import Image from "next/image";
import Link from "next/link";
import HeaderForm from "./HeaderForm";
import logoImage from "@/public/images/logo.png";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="flex justify-between pt-2 sm:pt-0 lg:px-0 items-center flex-wrap h-24 sm:h-20 border-b border-gray-light-2 text-sm sm:text-base">
      <Link href="/" className="w-16 h-16  block relative overflow-hidden mr-2">
        <Image src={logoImage} alt="Pure Derma Logo" />
      </Link>
      <HeaderForm />
      <HeaderNav />
    </header>
  );
};

export default Header;
