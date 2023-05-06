import Link from "next/link";
import styles from "./NavLink.module.css";
import { useRouter } from "next/router";
const NavLink = ({ href, title, icon }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <li
      className={`relative flex-1 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-[3px] before:bg-primary before:scale-y-0 ${
        styles.navlink
      } ${
        currentRoute === href ? "before:scale-y-100 before:w-full" : ""
      } hover:before:scale-y-100 hover:before:w-full lg:mb-1 lg:last:mb-0 `}
    >
      <Link
        href={href}
        className={`text-gray-light-1 uppercase  relative z- flex items-center gap-1 flex-col px-1 py-2 sm:p-4  lg:py-3 lg:px-6 text-[10px] sm:text-sm lg:text-base sm:flex-row sm:justify-center lg:justify-start `}
      >
        {icon}
        <span className="text-center">{title}</span>
      </Link>
    </li>
  );
};

export default NavLink;
