import Image from "next/image";
import Link from "next/link";
import { IoCart, IoPerson } from "react-icons/io5";
import HeaderForm from "./HeaderForm";

const Header = () => {
  return (
    <header className="flex justify-between px-4 md:px-8 items-center flex-wrap h-24 content-around">
      <div>
        <Link href="/" className="w-24 h-24 block relative overflow-hidden">
          <Image src="/images/logo.png" width={400} height={400} />
        </Link>
      </div>
      <HeaderForm />
      <nav className="flex items-center self-stretch">
        <div className="w-8 h-full flex items-center justify-center">
          <IoCart />
        </div>
        <div className="w-8 h-full flex items-center justify-center">
          <IoPerson />
        </div>
      </nav>
    </header>
  );
};

export default Header;
