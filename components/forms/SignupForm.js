import Button from "../ui/Button";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { IoCheckmark } from "react-icons/io5";

const SignupForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const confirmPasswordInputHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const clearInputs = () => {
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPassword("");
    setConfirmPassword("");
  };

  const clearFeedbacks = () => {
    setError("");
    setSuccess("");
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "/users/signup",
        {
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
          passwordConfirm: enteredConfirmPassword,
        },
        {
          baseURL: "https://pure-derma.onrender.com/api/v1",
          withCredentials: true,
        }
      );

      const { data } = response;
      console.log(data);
      setSuccess("تم التسجيل بنجاح");
      clearInputs();
      setTimeout(() => {
        router.push("/");
      }, 3 * 1000);
      const path = router.pathname;
      if (path !== "/") router.push("/");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
  return (
    <form
      onSubmit={submitFormHandler}
      className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3 xl:gap-x-4 gap-y-3  bg-primary max-w-[500px] lg:max-w-[100%]  relative pt-6 pb-12 sm:pt-6 sm:pb-14 lg:py-8 px-4 sm:px-8 lg:px-12 rounded-lg mx-auto"
    >
      <div>
        <FormLabel id="username">اسم المستخدم</FormLabel>
        <FormInput
          id="username"
          name="username"
          type="text"
          placeholder="أدخل اسمك"
          value={enteredName}
          onChange={nameInputHandler}
          onFocus={clearFeedbacks}
        />
      </div>
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
      <div>
        <FormLabel id="confirm-password">تأكيد كلمة المرور</FormLabel>
        <FormInput
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="يجب أن يكون مطابق لكلمة المرور"
          value={enteredConfirmPassword}
          onChange={confirmPasswordInputHandler}
          onFocus={clearFeedbacks}
        />
      </div>
      <Button submit className="mt-4">
        سجل الآن
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
        <p className="flex justify-center text-white absolute lg:relative bottom-2 lg:bottom-auto lg:self-end w-full ">
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

export default SignupForm;
