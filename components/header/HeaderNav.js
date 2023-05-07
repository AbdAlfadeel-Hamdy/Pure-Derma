import { IoCart, IoPerson } from "react-icons/io5";
import HeaderLink from "./HeaderLink";
import { useSelector } from "react-redux";

const HeaderNav = () => {
  const totalCartItems = useSelector((state) => state.cart.totalCartItems);
  return (
    <nav className="flex items-center">
      <HeaderLink href="/cart" className="">
        <IoCart className="w-5 sm:w-6 h-5 sm:h-6" />
        <span className="bg-primary-dark h-4 w-4 rounded-full absolute top-4 sm:top-6 right-0 sm:right-1 lg:right-2 text-white flex items-center justify-center font-thin text-xs">
          {totalCartItems}
        </span>
      </HeaderLink>
      <HeaderLink href="/auth">تسجيل الدخول</HeaderLink>
    </nav>
  );
};

export default HeaderNav;
