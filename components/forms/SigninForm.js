import Button from "../ui/Button";
import FormInput from "./FormInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "@/store/auth-actions";
import { authActions } from "@/store/auth-slice";
import Form from "./Form";

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
    <Form
      onSubmit={submitFormHandler}
      isLoading={isLoading}
      success={success}
      error={error}
    >
      <FormInput
        label="البريد الإلكتروني"
        name="email"
        type="email"
        placeholder="أدخل بريدك الإلكتروني"
        value={enteredEmail}
        onChange={emailInputHandler}
        onFocus={clearFeedbacks}
      />
      <FormInput
        label="كلمة المرور"
        name="password"
        type="password"
        placeholder="يجب أن يكون 7 حروف أو أكثر"
        value={enteredPassword}
        onChange={passwordInputHandler}
        onFocus={clearFeedbacks}
      />
      <Button submit className="mt-4">
        تسجيل الدخول
      </Button>
    </Form>
  );
};

export default SigninForm;
