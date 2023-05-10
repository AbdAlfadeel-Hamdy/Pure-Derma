import Button from "../ui/Button";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import BeatLoader from "react-spinners/BeatLoader";
import { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "@/store/auth-actions";
import { authActions } from "@/store/auth-slice";

const SigninForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const isLoading = useSelector((state) => state.auth.isLoading);
  const success = useSelector((state) => state.auth.successMessage);
  const error = useSelector((state) => state.auth.errorMessage);
  const dispatch = useDispatch();

  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  useEffect(() => {
    dispatch(authActions.clearFeedback());
  }, []);

  const clearFeedbacks = () => {
    dispatch(authActions.clearFeedback());
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    dispatch(loginAction(enteredEmail, enteredPassword));
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3 xl:gap-x-4 gap-y-3  bg-primary max-w-[500px] lg:max-w-[100%]  relative pt-6 pb-12 sm:pt-6 sm:pb-14 lg:py-8 px-4 sm:px-6 lg:px-8 rounded-lg mx-auto"
    >
      <div>
        <FormLabel id="email">البريد الإلكتروني</FormLabel>
        <FormInput
          id="email"
          name="email"
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={enteredEmail}
          onChange={emailInputHandler}
          onFocus={clearFeedbacks}
        />
      </div>
      <div>
        <FormLabel id="password">كلمة المرور</FormLabel>
        <FormInput
          id="password"
          name="password"
          type="password"
          placeholder="يجب أن يكون 7 حروف أو أكثر"
          value={enteredPassword}
          onChange={passwordInputHandler}
          onFocus={clearFeedbacks}
        />
      </div>

      <Button submit className="mt-4">
        تسجيل الدخول
      </Button>
      {isLoading && (
        <p className="flex justify-center text-white absolute lg:relative bottom-2 lg:bottom-auto lg:self-end w-full ">
          <BeatLoader loading={isLoading} />
        </p>
      )}
      {!isLoading && error && (
        <p className="flex justify-center text-white absolute lg:relative bottom-2 lg:bottom-auto lg:self-end w-full ">
          {error}
        </p>
      )}
      {!isLoading && !error && success && (
        <p className="flex justify-center items-center gap-1 sm:gap-2 text-white absolute lg:relative bottom-2 lg:bottom-auto lg:self-end w-full ">
          {success}
          <IoCheckmark
            className="bg-primary-dark-3 rounded-full p-1 w-5 h-5"
            color="#fff"
          />
        </p>
      )}
    </form>
  );
};

export default SigninForm;
