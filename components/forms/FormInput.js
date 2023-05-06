const FormInput = ({ ...rest }) => {
  return (
    <input
      id="username"
      name="username"
      required
      className="w-full p-2 rounded-lg bg-primary-light-2 focus:outline-none focus:shadow-[0_0_0_8px_rgba(254,239,220)] placeholder:text-primary placeholder:text-sm sm:placeholder:text-base text-primary-dark-1"
      {...rest}
    />
  );
};

export default FormInput;
