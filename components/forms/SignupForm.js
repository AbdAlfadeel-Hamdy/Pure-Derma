import Button from "../ui/Button";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import { useRouter } from "next/router";

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
    const response = await fetch(
      "https://pure-derma.onrender.com/api/v1/users/signup",
      {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
          passwordConfirm: enteredConfirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      }
    );

    if (!response.ok) {
      setError("كلمة مرور غير متطابقة");
      setIsLoading(false);
      return;
    }
    const data = await response.json();
    setIsLoading(false);
    setSuccess("تم بنجاح");
    clearInputs();
    console.log(data);
    setTimeout(() => {
      setSuccess("");
      const path = router.pathname;
      if (path !== "/") router.push("/");
    }, 2000);
  };
  return (
    <form
      onSubmit={submitFormHandler}
      className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3 xl:gap-x-4 gap-y-3  bg-primary max-w-[500px] lg:max-w-[100%]  relative pt-4 pb-12 sm:pt-6 sm:pb-14 lg:py-8 px-2 sm:px-6 lg:px-8 rounded-lg mx-auto"
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
        </p>
      )}
    </form>
  );
};

export default SignupForm;
