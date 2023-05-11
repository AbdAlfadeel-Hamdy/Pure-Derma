const HeadingSecondary = ({ children, className }) => {
  return (
    <h2
      // className={`uppercase tracking-[2px] w-fit mx-auto bg-gradient-to-r from-primary-light to-primary-dark text-transparent bg-clip-text text-xl sm:text-2xl lg:text-3xl xl:text-4xl ${className}`}
      className={`uppercase text-primary-dark text-2xl sm:text-3xl lg:text-4xl ${className} text-center`}
    >
      {children}
    </h2>
  );
};

export default HeadingSecondary;
