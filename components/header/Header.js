import Image from "next/image";
import Link from "next/link";
import { IoCart, IoPerson } from "react-icons/io5";
import HeaderForm from "./HeaderForm";

const Header = () => {
  return (
    <header className="flex justify-between items-center flex-wrap h-[96px] content-around">
      <div>
        <Link href="/" className="w-[60px] h-[40px] block">
          <Image src="/images/logo.jpg" width={60} height={40} />
        </Link>
      </div>
      <HeaderForm />
      <nav className="flex items-center self-stretch">
        <div>
          <IoCart />
        </div>
        <div>
          <IoPerson />
        </div>
      </nav>
    </header>
  );
};

export default Header;
