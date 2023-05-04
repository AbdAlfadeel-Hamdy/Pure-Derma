import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { IoCart, IoCheckmark, IoMenu } from "react-icons/io5";
const ProductItem = ({ product }) => {
  return (
    <li className="rounded-xl overflow-hidden shadow-md relative ">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.imgUrl}
          width={800}
          height={800}
          className="h-[400px] w-[400px]  object-cover"
        />
        <div className="px-4 py-2 flex flex-col gap-4">
          <h3 className="text-primary-dark font-semibold text-lg sm:text-xl lg:text-2xl uppercase sm:min-h-[56px] lg:min-h-[64px]">
            {product.title}
          </h3>
          <div className="text-4xl text-primary flex justify-center gap-4">
            {product.price} <span>جنيه</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 sm:flex-col">
              <Button
                primary
                className="flex-1 flex items-center justify-center gap-2"
              >
                <span>عرض التفاصيل</span> <IoMenu />
              </Button>
              <Button
                secondary
                className="flex-1 sm:p-2 flex items-center justify-center gap-1"
              >
                <span>أضف إلى العربة</span>
                <IoCart />
              </Button>
            </div>
            <Button tertiary className="flex items-center justify-center gap-2">
              <span>شراء الأن</span> <IoCheckmark />
            </Button>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
