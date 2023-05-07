import Image from "next/image";
import { IoAdd, IoRemove } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction } from "@/store/cart-slice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCartAction(product.id));
  };
  const removeFromCartHandler = () => {
    dispatch(removeFromCartAction(product.id));
  };

  return (
    <li className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden text-lg max-w-[300px] sm:max-w-none">
      <Image
        src={product.src}
        width={400}
        height={200}
        className="h-[200px] sm:w-[200px]"
      />
      {/* Content */}
      <div className="border-t sm:border-r sm:border-t-0 border-gary-light-2 flex-1 flex flex-col">
        <div className="flex flex-col gap-2 sm:gap-6 py-4 px-4 border-b border-gray-light-2 ">
          <h2 className="text-center sm:text-xl">{product.title}</h2>
          <div className="flex gap-2 justify-center mb-4 ">
            <span>{product.price}</span>
            <span>جنيه</span>
          </div>
          <div className="flex justify-between ">
            <span>الكمية</span>
            <div className="flex gap-4">
              <button onClick={addToCartHandler}>
                <IoAdd className="hover:text-primary-dark-1" />
              </button>
              <span>{product.quantity}</span>
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
    </li>
  );
};

export default CartItem;
