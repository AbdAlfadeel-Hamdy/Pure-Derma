import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCartAction } from "@/store/cart-actions";

const CartList = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCartAction());
  };
  const renderedProducts = products.map((product) => (
    <CartItem key={product.id} product={product} />
  ));
  return (
    <ul className="grid lg:grid-cols-2 gap-8 justify-center pb-8 lg:pb-12">
      {renderedProducts}
      <button onClick={clearCartHandler}>Delete All</button>
    </ul>
  );
};

export default CartList;
