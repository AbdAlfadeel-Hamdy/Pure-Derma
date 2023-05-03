import NavLink from "./NavLink";
import { IoHome, IoHeart, IoBody, IoWoman } from "react-icons/io5";
const links = [
  { id: 1, title: "الرئيسية", href: "/", icon: IoHome() },
  { id: 2, title: "skin care", href: "/skin-care", icon: IoBody() },
  { id: 3, title: "hair care", href: "/hair-care", icon: IoWoman() },
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
