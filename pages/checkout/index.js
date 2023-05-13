import { useDispatch, useSelector } from "react-redux";
import { getUserCartAction } from "@/store/cart-actions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Checkout from "@/components/checkout/Checkout";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  if (loggedInUser) dispatch(getUserCartAction());

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loggedInUser) router.push("/auth");
      if (!loggedInUser.numOfCart) router.push("/cart");
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [loggedInUser]);

  return <Checkout />;
};

export default CheckoutPage;
