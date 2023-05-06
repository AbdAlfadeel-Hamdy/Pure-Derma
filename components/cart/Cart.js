import { useState } from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import CartList from "./CartList";

const dummyProducts = [
  {
    id: 0,
    title: "Product 1",
    price: 12.99,
    quantity: 4,
    src: "/images/products/Mock up_page-0001.jpg",
  },
  {
    id: 1,
    title: "Product 2",
    price: 12.99,
    quantity: 1,
    src: "/images/products/Mock up_page-0001.jpg",
  },
  {
    id: 2,
    title: "Product 3",
    price: 12.99,
    quantity: 4,
    src: "/images/products/Mock up_page-0001.jpg",
  },
  {
    id: 3,
    title: "Product 4",
    price: 12.99,
    quantity: 1,
    src: "/images/products/Mock up_page-0001.jpg",
  },
];

const Cart = () => {
  const [products, setProducts] = useState(dummyProducts);
  const addItemHandler = (id) => {
    const newProducts = products.map((product) => {
      if (product.id !== id) return product;
      else return { ...product, quantity: product.quantity + 1 };
    });
    setProducts(newProducts);
  };
  const removeItemHandler = (id) => {
    const targetProduct = products.find((product) => product.id === id);
    if (targetProduct.quantity === 1) {
      const updatedProducts = products.filter((product) => product.id !== id);
      return setProducts(updatedProducts);
    }
    const updatedProducts = products.map((product) => {
      if (product.id !== id) return product;
      else return { ...product, quantity: product.quantity - 1 };
    });
    setProducts(updatedProducts);
  };
  return (
    <section className="py-8 sm:pt-10 lg:py-12 px-8">
      <HeadingSecondary className="pb-8">سلة المشتروات</HeadingSecondary>
      {!products.length && (
        <p className="text-center text-sm sm:text-lg lg:text-2xl">
          لم تقم بإضافة أي منتج{" "}
        </p>
      )}
      <CartList
        products={products}
        addItemHandler={addItemHandler}
        removeItemHandler={removeItemHandler}
      />
      {!!products.length && (
        <div className="border-t border-gray-light-2 flex justify-between pt-6">
          <span>مجموع التكلفة</span>
          <span>
            {products
              .reduce(
                (prev, product) => prev + product.price * product.quantity,
                0
              )
              .toFixed(2)}
          </span>
        </div>
      )}
    </section>
  );
};

export default Cart;
