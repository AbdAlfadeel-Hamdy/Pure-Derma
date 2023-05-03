import { IoCart, IoPerson } from "react-icons/io5";
import HeaderLink from "./HeaderLink";

const HeaderNav = () => {
  return (
    <nav className="flex items-center basis-24">
      <HeaderLink>
        <IoCart className="w-5 sm:w-6 h-5 sm:h-6" />
        <span className="bg-primary h-4 w-4 rounded-full absolute top-4 sm:top-6 right-0 text-white flex items-center justify-center font-thin text-xs">
          1
        </span>
      </HeaderLink>
      <HeaderLink className="gap-2">
        <IoPerson className="w-5 sm:w-6 h-5 sm:h-6" />
        <span className="text-lg">adham</span>
      </HeaderLink>
    </nav>
  );
};

export default HeaderNav;
