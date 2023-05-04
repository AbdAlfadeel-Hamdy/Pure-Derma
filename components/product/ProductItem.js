import Image from "next/image";
import Link from "next/link";
const ProductItem = ({ product }) => {
  return (
    <li>
      <Link href={"#"}>
        <Image src={product.imgUrl} width={200} height={200} />
        <div>
          {product.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <h3>{product.title}</h3>
        <div>
          {product.price} <span>$</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
