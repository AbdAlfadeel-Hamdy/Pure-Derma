import Button from "../ui/Button";
import FormInput from "./FormInput";
import { useState, useEffect } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "@/store/auth-actions";
import { authActions } from "@/store/auth-slice";

const SignupForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setConfirmPassword] = useState("");
  const isLoading = useSelector((state) => state.auth.isLoading);
  const success = useSelector((state) => state.auth.successMessage);
  const error = useSelector((state) => state.auth.errorMessage);
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(authActions.clearFeedback());
  }, []);

  const clearFeedbacks = () => {
    dispatch(authActions.clearFeedback());
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    dispatch(
      signupAction(
        enteredName,
        enteredEmail,
        enteredPassword,
        enteredConfirmPassword
      )
    );
  };
  return (
    <Form
      onSubmit={submitFormHandler}
      isLoading={isLoading}
      error={error}
      success={success}
    >
      <FormInput
        label="اسم المستخدم"
        name="username"
        type="text"
        placeholder="أدخل اسمك"
        value={enteredName}
        onChange={nameInputHandler}
        onFocus={clearFeedbacks}
      />
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
        value={enteredEmail}
        onChange={passwordInputHandler}
        onFocus={clearFeedbacks}
      />
      <FormInput
        label="تأكيد كلمة المرور"
        name="confirm-password"
        type="password"
        placeholder="يجب أن يكون مطابق لكلمة المرور"
        value={enteredConfirmPassword}
        onChange={confirmPasswordInputHandler}
        onFocus={clearFeedbacks}
      />
      <Button submit className="mt-4">
        سجل الآن
      </Button>
    </Form>
  );
};

export default SignupForm;
