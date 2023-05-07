import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const renderedProducts = products.map((product) => (
    <CartItem key={product.id} product={product} />
  ));
  return (
    <ul className="grid lg:grid-cols-2 gap-8 justify-center pb-8 lg:pb-12">
      {renderedProducts}
    </ul>
  );
};

export default CartList;
