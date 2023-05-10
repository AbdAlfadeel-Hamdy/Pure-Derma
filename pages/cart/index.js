import Cart from "@/components/cart/Cart";
import { getUserCartAction } from "@/store/cart-actions";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  if (loggedInUser) dispatch(getUserCartAction());

  return <Cart />;
};

export default CartPage;
