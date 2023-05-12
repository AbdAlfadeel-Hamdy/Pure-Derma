import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const products = useSelector((state) => state.cart.cartItems);

  const renderedProducts = products.map((product) => (
    <CartItem key={product.id} product={product} />
  ));
  return <ul className="grid lg:grid-cols-2 gap-4">{renderedProducts}</ul>;
};

export default CartList;
