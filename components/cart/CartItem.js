import Image from "next/image";
import { IoAdd, IoRemove } from "react-icons/io5";

const CartItem = ({ product, addItemHandler, removeItemHandler }) => {
  const addHandler = () => {
    addItemHandler(product.id);
  };
  const removeHandler = () => {
    removeItemHandler(product.id);
  };
  return (
    <li className="flex bg-white rounded-lg shadow-md overflow-hidden ">
      <Image
        src={product.src}
        width={150}
        height={200}
        className="h-auto sm:w-[250px]"
      />
      <div className="border-r border-gary-light-2 flex-1 flex flex-col">
        <div className="sm:flex-2 flex flex-col justify-between gap-8 py-4 px-4 border-b border-gray-light-2 ">
          <h2 className=" text-center sm:text-lg">{product.title}</h2>
          <div className="text-xl flex gap-2">
            <span>{product.price}</span>
            <span>جنيه</span>
          </div>
          <div className="text-xl flex justify-between ">
            <span>الكمية</span>
            <div>
              <button onClick={addHandler}>
                <IoAdd />
              </button>
            </div>
            <span>{product.quantity}</span>
            <button onClick={removeHandler}>
              <IoRemove />
            </button>
          </div>
        </div>
        <div className="flex justify-between    items-center flex-1 px-4 ">
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
