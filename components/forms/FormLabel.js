const FormLabel = ({ children, id }) => {
  return (
    <label htmlFor={id} className="block font-medium mb-2 text-primary-dark-3">
      {children}
    </label>
  );
};

export default FormLabel;
