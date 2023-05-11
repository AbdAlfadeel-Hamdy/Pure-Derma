import Image from "next/image";
import { IoAdd, IoRemove, IoStop } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCartAction, updateCartAction } from "@/store/cart-actions";
import { useState } from "react";

const CartItem = ({ product }) => {
  const [quantity, setQuentity] = useState("");
  const quantityInputHandler = (e) => {
    setQuentity(e.target.value);
  };
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(updateCartAction(product.product, product.quantity + 1));
  };
  const removeFromCartHandler = () => {
    if (product.quantity === 1) dispatch(removeFromCartAction(product.product));
    else dispatch(updateCartAction(product.product, product.quantity - 1));
  };
  const updateQuantityHandler = () => {
    if (quantity <= 0) dispatch(removeFromCartAction(product.product));
    dispatch(updateCartAction(product.product, quantity));
    setQuentity("");
  };
  const deleteCartItemHandler = () => {
    dispatch(removeFromCartAction(product.product));
  };
  return (
    <li className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden text-lg max-w-[300px] sm:max-w-none relative">
      {/* <Image
        src={product.src}
        width={400}
        height={200}
        className="h-[200px] sm:w-[200px]"
      /> */}

      <div className="border-t sm:border-r sm:border-t-0 border-gary-light-2 flex-1 flex flex-col">
        <div className="flex flex-col gap-2 sm:gap-6 py-4 px-4 border-b border-gray-light-2 ">
          <h2 className="text-center sm:text-xl">{product.name}</h2>
          <div className="flex gap-2 justify-center mb-4 ">
            <span>{product.price}</span>
            <span>جنيه</span>
          </div>
          <div className="flex justify-between ">
            <span>الكمية</span>
            <span>{product.quantity}</span>
            <div className="flex gap-4">
              <button onClick={addToCartHandler}>
                <IoAdd className="hover:text-primary-dark-1" />
              </button>
              <input
                type="text"
                placeholder={product.quantity}
                value={quantity}
                onChange={quantityInputHandler}
              />
              {quantity && (
                <button onClick={updateQuantityHandler}>Update</button>
              )}
              <button onClick={removeFromCartHandler}>
                <IoRemove className="hover:text-primary-dark-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between sm:gap-6 lg:justify-between items-center flex-1 p-4">
          <span>الإجمالي</span>
          <div className="flex gap-2">
            <span>{(product.price * product.quantity).toFixed(2)}</span>
            <span>جنيه</span>
          </div>
        </div>
      </div>
      <span>
        <IoStop
          className="absolute top-1 left-2 cursor-pointer"
          onClick={deleteCartItemHandler}
        />
      </span>
    </li>
  );
};

export default CartItem;
