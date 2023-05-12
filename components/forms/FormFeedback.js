const FormFeedback = ({ children, className }) => {
  return (
    <p
      className={`flex justify-center text-white absolute lg:relative bottom-2 lg:bottom-auto lg:self-end w-full ${className}`}
    >
      {children}
    </p>
  );
};

export default FormFeedback;
