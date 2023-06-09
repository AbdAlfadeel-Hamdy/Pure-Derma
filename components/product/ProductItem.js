import Image from "next/image";
import Button from "../ui/Button";
import {
  IoCart,
  IoClose,
  IoHeart,
  IoHeartOutline,
  IoMenu,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "@/store/cart-actions";
import { useRouter } from "next/router";
import { toggleFavoriteAction } from "@/store/auth-actions";
import axios from "axios";
import { API_SERVER } from "@/lib/constants";
import { uiActions } from "@/store/ui-slice";

const ProductItem = ({ product }) => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const addToCartHandler = () => {
    if (!loggedInUser) router.push("/auth");
    else dispatch(addToCartAction(product.id));
  };
  const toggleFavoriteHandler = async () => {
    if (!loggedInUser) router.push("/auth");
    else dispatch(toggleFavoriteAction(product));
  };

  const deleteProductHandler = async () => {
    try {
      dispatch(uiActions.send("جاري حذف المنتج"));
      await axios.delete(`/products/${product.id}`, {
        baseURL: API_SERVER,
        withCredentials: true,
      });
      dispatch(uiActions.success("تم حذف المنتج"));
    } catch (err) {
      dispatch(uiActions.error("حدث خطأ أثناء حذف المنتج"));
    }
    setTimeout(() => {
      dispatch(uiActions.clear());
    }, 3000);
  };
  return (
    <li className="rounded-xl overflow-hidden shadow-md relative hover:-translate-y-1 hover:shadow-lg lg:hover:shadow-xl duration-200 w-[300px] mx-auto ">
      {loggedInUser && loggedInUser.role === "admin" && (
        <IoClose
          className="absolute top-2 right-2 bg-primary p-1 text-2xl xl:text-3xl text-white cursor-pointer hover:bg-primary-dark duration-200 "
          onClick={deleteProductHandler}
        />
      )}
      <Image
        src={product.detailsImage}
        alt={product.description}
        width={300}
        height={200}
        className="h-[200px] min-w-full w-[400px]  object-cover"
      />
      <div className="px-2 py-4 flex flex-col gap-4">
        <h3 className="text-primary sm:text-xl lg:text-2xl uppercase   text-center">
          {product.name}
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
        </div>
      </div>
      {!product.isFavorite && (
        <IoHeartOutline
          className="absolute top-2 left-2 w-6 h-6 cursor-pointer text-primary-dark"
          onClick={toggleFavoriteHandler}
        />
      )}
      {product.isFavorite && (
        <IoHeart
          className="absolute top-2 left-2 w-6 h-6 cursor-pointer text-primary-dark"
          onClick={toggleFavoriteHandler}
        />
      )}
    </li>
  );
};

export default ProductItem;
