import NavLink from "./NavLink";
import { IoHome, IoHeart, IoWoman } from "react-icons/io5";
import { MdFace4 } from "react-icons/md";
const links = [
  { id: 1, title: "الرئيسية", href: "/home", icon: IoHome() },
  { id: 2, title: "منتجات البشرة", href: "/skin-care", icon: IoWoman() },
  { id: 3, title: "منتجات الشعر", href: "/hair-care", icon: MdFace4() },
  { id: 4, title: "المفضلة", href: "/wishlist", icon: IoHeart() },
];

const Navbar = () => {
  const renderedLinks = links.map((link) => (
    <NavLink
      key={link.id}
      href={link.href}
      title={link.title}
      icon={link.icon}
    />
  ));
  return (
    <nav className="bg-gray-dark-1 mt-8 sm:mt-0 flex flex-col lg:flex-[0_0_18%]  leading-relaxed text-gray-dark-2">
      <ul className="flex lg:block lg:mt-8">{renderedLinks}</ul>
    </nav>
  );
};

export default Navbar;
