const HeadingSecondary = ({ children }) => {
  return (
    <h2 className="uppercase tracking-[2px] inline-block bg-gradient-to-r from-primary-light to-primary-dark text-transparent bg-clip-text text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
      {children}
    </h2>
  );
};

export default HeadingSecondary;
