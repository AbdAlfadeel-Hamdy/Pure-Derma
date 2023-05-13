import { useState } from "react";
import Form from "./Form";
import FormInput from "./FormInput";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { createOrderAction } from "@/store/order-actions";
const CheckoutForm = () => {
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const dispatch = useDispatch();
  const addressInputHandler = (e) => {
    e.preventDefault();
    setEnteredAddress(e.target.value);
  };
  const phoneInputHandler = (e) => {
    e.preventDefault();
    setEnteredPhone(e.target.value);
  };
  const cityInputHandler = (e) => {
    e.preventDefault();
    setEnteredCity(e.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(createOrderAction(enteredAddress, enteredPhone, enteredCity));
  };
  return (
    <Form onSubmit={submitFormHandler} className="pb-6 sm:pb-6">
      <FormInput
        label="العنوان"
        name="address"
        type="text"
        placeholder="قم بكتابة عنوانك بالكامل"
        value={enteredAddress}
        onChange={addressInputHandler}
      />
      <FormInput
        label="رقم الهاتف"
        name="phone"
        type="number"
        placeholder="قم بكتابة رقم هاتفك"
        value={enteredPhone}
        onChange={phoneInputHandler}
        length={11}
      />
      <FormInput
        label="المحافظة"
        name="gover"
        type="text"
        placeholder="قم بكتابة اسم محافظتك"
        value={enteredCity}
        onChange={cityInputHandler}
      />
      <Button submit className="mt-4 self-end">
        تأكيد الشراء
      </Button>
    </Form>
  );
};

export default CheckoutForm;
