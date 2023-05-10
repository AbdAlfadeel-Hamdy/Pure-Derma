import Link from "next/link";

const HeaderLink = ({ children, className, href, ...rest }) => {
  if (!href)
    return (
      <button
        className={`flex items-center justify-center hover:bg-gray-light-2 h-16 sm:h-20 px-2 sm:px-3 lg:px-4 relative ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  return (
    <Link
      href={href}
      className={`flex items-center justify-center hover:bg-gray-light-2 h-16 sm:h-20 px-2 sm:px-3 lg:px-4 relative ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
