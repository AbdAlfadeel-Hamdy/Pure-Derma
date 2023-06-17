import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const products = useSelector((state) => state.cart.cartItems);
  console.log(products);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const renderedProducts = products.map((product) => (
    <li
      key={product._id}
      className="grid grid-cols-2 sm:grid-cols-1 border-b border-primary-dark-3 py-1"
    >
      <h3 className="py-1 px-3">{product.product.name}</h3>
      <p className="px-4 justify-self-end sm:justify-self-auto">
        <span className="text-lg">{product.quantity}</span>x
      </p>
    </li>
  ));
  return (
    <div className="bg-primary text-primary-dark-3 rounded-lg mb-4 py-2 sm:pt-6 px-2 self-start max-w-[500px] mx-auto md:mx-0">
      <h2 className=" text-center mb-2 text-lg font-medium">قائمة المشتريات</h2>
      <ul className="mb-2">{renderedProducts}</ul>
      <div className="flex justify-between px-4 sm:px-2 sm:gap-4">
        <span>الإجمالي</span>
        <p className="flex gap-1">
          <span className="text-lg font-thin">{totalCartPrice.toFixed(2)}</span>
          <span>جنيه</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
