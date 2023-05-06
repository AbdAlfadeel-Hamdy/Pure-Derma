import CartItem from "./CartItem";

const CartList = ({ products, addItemHandler, removeItemHandler }) => {
  const renderedProducts = products.map((product) => (
    <CartItem
      key={product.id}
      product={product}
      addItemHandler={addItemHandler}
      removeItemHandler={removeItemHandler}
    />
  ));
  return (
    <ul className="grid lg:grid-cols-2 gap-8 justify-center pb-8 lg:pb-12">
      {renderedProducts}
    </ul>
  );
};

export default CartList;
