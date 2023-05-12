import FormFeedback from "./FormFeedback";
import BeatLoader from "react-spinners/BeatLoader";
import { IoCheckmark } from "react-icons/io5";

const Form = ({ children, onSubmit, isLoading, success, error }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3 xl:gap-x-4 gap-y-3  bg-primary max-w-[500px] lg:max-w-[100%]  relative pt-6 pb-12 sm:pt-6 sm:pb-14 lg:py-8 px-4 sm:px-6 lg:px-8 rounded-lg mx-auto"
    >
      {children}
      {isLoading && (
        <FormFeedback>
          <BeatLoader loading={isLoading} />
        </FormFeedback>
      )}
      {!isLoading && error && <FormFeedback>{error}</FormFeedback>}
      {!isLoading && !error && success && (
        <FormFeedback className="items-center gap-1 sm:gap-2">
          {success}
          <IoCheckmark
            className="bg-primary-dark-3 rounded-full p-1 w-5 h-5"
            color="#fff"
          />
        </FormFeedback>
      )}
    </form>
  );
};

export default Form;
