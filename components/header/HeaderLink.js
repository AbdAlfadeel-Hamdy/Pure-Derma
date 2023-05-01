import Link from "next/link";

const HeaderLink = ({ children, className }) => {
  return (
    <Link
      href="/cart"
      className={`flex items-center justify-center hover:bg-gray-light-2 h-16 sm:h-20 px-2 basis-16 relative ${className}`}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
