import Image from "next/image";
import { IoAdd, IoClose, IoRemove } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCartAction, updateCartAction } from "@/store/cart-actions";
import { useState } from "react";
import Button from "../ui/Button";
import imageOne from "@/public/images/products/1.png";

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
    <li className="flex sm:flex-row bg-white rounded-lg shadow-md hover:-translate-y-2 hover:shadow-lg duration-200 overflow-hidden text-lg max-w-md lg:max-w-lg xl:max-w-none relative">
      <Image
        src={imageOne}
        width={150}
        height={200}
        className="sm:w-[200px] lg:w-[150px] xl:w-[200px]"
      />
      <div className="flex-1">
        <div className="border-b border-gray-light-2 p-2 sm:p-4 pb-6 sm:pb-8 ">
          <h2 className="text-center sm:text-xl mb-2 sm:mb-3">product title</h2>
          <div className="flex justify-center items-center gap-1 mb-4 ">
            <span className="font-thin text-xl">{product.price}</span>
            <span className="text-sm lg:text-base">جنيه</span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <span>الكمية</span>
            <span className="bg-primary text-white px-2 rounded">
              {product.quantity}
            </span>
            <div className="flex-1 flex justify-between sm:justify-around">
              <button onClick={addToCartHandler}>
                <IoAdd className="hover:text-primary-dark-1" />
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder={product.quantity}
                  value={quantity}
                  onChange={quantityInputHandler}
                  className="w-10 text-center border border-gray-light-2 rounded-md outline-none focus:border-gray-light-4"
                />
                {quantity && (
                  <Button
                    primary
                    onClick={updateQuantityHandler}
                    className="absolute top-[110%] left-1/2 -translate-x-1/2 text-xs sm:text-sm px-[1px] py-[1px] sm:px-1 lg:text-sm"
                  >
                    تحديث
                  </Button>
                )}
              </div>

              <button onClick={removeFromCartHandler}>
                <IoRemove className="hover:text-primary-dark-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between sm:gap-6 lg:justify-between items-center flex-1 p-2">
          <span>الإجمالي</span>
          <div className="flex gap-1 items-center">
            <span className="font-thin text-xl">
              {(product.price * product.quantity).toFixed(2)}
            </span>
            <span className="text-sm">جنيه</span>
          </div>
        </div>
      </div>

      <span>
        <IoClose
          className="absolute top-1 left-1 cursor-pointer bg-primary rounded-sm text-white hover:bg-primary-dark duration-200 w-6 h-6"
          onClick={deleteCartItemHandler}
        />
      </span>
    </li>
  );
};

export default CartItem;
