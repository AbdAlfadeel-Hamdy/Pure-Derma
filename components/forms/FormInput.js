const FormInput = ({
  label,
  value,
  onChange,
  name,
  type,
  placeholder,
  className,
  inputRef,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-medium mb-2 text-primary-dark-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 rounded-lg bg-primary-light-2 focus:outline-none focus:shadow-[0_0_0_8px_rgba(254,239,220)] placeholder:text-primary placeholder:text-sm sm:placeholder:text-base text-primary-dark-1 ${className}`}
        required
        {...rest}
        ref={inputRef}
      />
    </div>
  );
};

export default FormInput;
