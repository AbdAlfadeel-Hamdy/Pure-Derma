import Link from "next/link";
import classes from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  tertiary,
  submit,
  href,
  className,
  ...rest
}) => {
  const styles = classes({
    "rounded-[9px] font-medium sm:font-semibold text-xs sm:text-base lg:text-lg  px-1 py-2 duration-200": true,
    "bg-primary text-white hover:bg-primary-dark ": primary,
    "bg-primary-light-2 text-primary-dark-1 hover:bg-white hover:shadow-[inset] hover:shadow-[0_0_0_3px_rgba(primary-dark-1)]  ":
      secondary,
    "bg-primary-dark-2 text-white hover:bg-primary": tertiary,
    "bg-primary-dark-3 text-white hover:bg-primary-light-2 hover:text-primary-dark-3 focus:outline-none focus:focus:shadow-[0_0_0_8px_rgba(254,239,220)] ":
      submit,
  });

  if (href)
    return (
      <Link
        href={href}
        className={`${styles} inline-block ${className}`}
        {...rest}
      >
        {children}
      </Link>
    );
  return (
    <button className={`${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
