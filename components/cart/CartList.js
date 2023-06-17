import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const products = useSelector((state) => state.cart.cartItems);

  const renderedProducts = products.map((product) => {
    return (
      <CartItem
        key={product._id}
        product={product.product}
        quantity={product.quantity}
      />
    );
  });

  return (
    <ul className="grid mx-auto max-w-md lg:max-w-none  lg:grid-cols-2 gap-4 lg:gap-8 pb-6 sm:pb-10 lg:pb-16">
      {renderedProducts}
    </ul>
  );
};

export default CartList;
