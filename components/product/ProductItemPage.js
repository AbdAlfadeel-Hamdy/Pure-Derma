import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import Button from "@/components/ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToCartAction } from "@/store/cart-actions";
import { toggleFavoriteAction } from "@/store/auth-actions";
const ProductItemPage = ({ product }) => {
  const wishlist = useSelector((state) => state.auth.wishlist);
  const wishlistIds = wishlist.map((product) => product.id);
  const renderedProduct = wishlistIds.includes(product.id)
    ? { ...product, isFavorite: true }
    : { ...product, isFavorite: false };

  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const addToCartHandler = () => {
    if (!loggedInUser) router.push("/auth");
    else dispatch(addToCartAction(renderedProduct.id));
  };
  const toggleFavoriteHandler = async () => {
    if (!loggedInUser) router.push("/auth");
    else dispatch(toggleFavoriteAction(renderedProduct));
  };
  const renderedFeatures = product.features.map((feat, index) => (
    <li key={index} className="flex gap-2 items-center">
      <IoCheckmark />
      <p>{feat}</p>
    </li>
  ));

  return (
    <section className="flex flex-col gap-4 sm:gap-8 lg:gap-12 max-w-[800px] mx-auto bg-secondary min-h-[calc(100vh-140px)]">
      <Image
        src={renderedProduct.imageCover}
        alt={renderedProduct.description}
        width={800}
        height={320}
      />
      <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 justify-center items-center ">
        <h1
          className="text-center text-primary-dark-1 text-xl sm:text-2xl lg:text-3xl
      "
        >
          {renderedProduct.name}
        </h1>
        <h2
          className="text-center text-primary sm:text-lg lg:text-xl flex gap-1 items-center
      "
        >
          <span>{renderedProduct.price}</span>
          <span>جنيه</span>
        </h2>
      </div>

      <ul className="px-2 sm:px-4 lg:px-8 sm:text-lg lg:grid lg:grid-cols-2 lg:gap-x-12">
        {renderedFeatures}
      </ul>
      <div className="flex gap-2 px-2 mb-4 sm:gap-4 sm:px-4 lg:gap-8 lg:px-8">
        <Button primary className="flex-1" onClick={addToCartHandler}>
          أضف إلى العربة
        </Button>
        <Button tertiary className="flex-1" onClick={toggleFavoriteHandler}>
          {renderedProduct.isFavorite ? "حذف من المفضلة" : "أضف إلى المفضلة"}
        </Button>
      </div>
    </section>
  );
};

export default ProductItemPage;
