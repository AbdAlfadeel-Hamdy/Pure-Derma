import Image from "next/image";
import Button from "../ui/Button";
import { IoCart, IoCheckmark, IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCartAction } from "@/store/cart-actions";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCartAction(product.id));
  };
  return (
    <li className="rounded-xl overflow-hidden shadow-md relative ">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={800}
        height={200}
        className="h-[200px] min-w-full w-[400px]  object-cover"
      />
      <div className="px-2 py-4 flex flex-col gap-4">
        <h3 className="text-primary sm:text-xl lg:text-2xl uppercase sm:min-h-[56px] lg:min-h-[64px]">
          {product.title}
        </h3>
        <div className="text-2xl sm:text-3xl text-primary font-light flex justify-center gap-3">
          {product.price} <span>جنيه</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 sm:flex-col">
            <Button
              href={`/products/${product.id}`}
              name="show details"
              primary
              className="flex-1 flex items-center justify-center gap-2"
            >
              <span>عرض التفاصيل</span> <IoMenu />
            </Button>
            <Button
              name="add to cart"
              secondary
              className="flex-1 flex items-center justify-center gap-2"
              onClick={addToCartHandler}
            >
              <span>أضف إلى العربة</span>
              <IoCart />
            </Button>
          </div>
          <Button
            name="buy now"
            tertiary
            className="flex items-center justify-center gap-2"
          >
            <span>شراء الأن</span> <IoCheckmark />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
