import { useState } from "react";
import Form from "./Form";
import FormInput from "./FormInput";
import Button from "../ui/Button";
import axios from "axios";
import { API_SERVER } from "@/lib/constants";
import { uiActions } from "@/store/ui-slice";
import { useDispatch } from "react-redux";
const ProductForm = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");
  const [image, setImage] = useState(product?.detailsImage || "");
  const [coverImage, setCoverImage] = useState(product?.imageCover || "");
  const [description, setDescription] = useState(product?.description || "");
  const [category, setCategory] = useState(
    product?.category._id || "6454fe220bbe3cf2b788cb04"
  );
  const [feature1, setFeature1] = useState(product?.features[0]);
  const [feature2, setFeature2] = useState(product?.features[1]);
  const [feature3, setFeature3] = useState(product?.features[2]);
  const [feature4, setFeature4] = useState(product?.features[3]);
  const [feature5, setFeature5] = useState(product?.features[4]);
  const [feature6, setFeature6] = useState(product?.features[5]);
  const [feature7, setFeature7] = useState(product?.features[6]);
  const [feature8, setFeature8] = useState(product?.features[7]);

  const selectImageFile = (e) => {
    setImage(e.target.files[0]);
  };
  const selectCoverImageFile = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const clearInputs = () => {
    setName("");
    setPrice("");
    setImage("");
    setCoverImage("");
    setDescription("");
    setCategory("");
    setFeature1("");
    setFeature2("");
    setFeature3("");
    setFeature4("");
    setFeature5("");
    setFeature6("");
    setFeature7("");
    setFeature8("");
  };

  const submitHandler = async (e) => {
    const features = [
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
      feature7,
      feature8,
    ];

    const modifiedFeatures = features?.filter((feat) => !!feat);
    e.preventDefault();

    const imageFormData = new FormData();
    imageFormData.append("image", image);

    const coverImageFormData = new FormData();
    coverImageFormData.append("imageCover", coverImage);

    const productData = {
      name,
      price,
      category,
      description,
      features: modifiedFeatures,
    };
    if (!product) {
      productData.detailsImage = imageFormData.get("image");
      productData.imageCover = coverImageFormData.get("imageCover");
    }

    try {
      dispatch(uiActions.send("جاري إضافة المنتج"));
      if (!product)
        await axios.post("/products", productData, {
          baseURL: API_SERVER,
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      else
        await axios.patch(`/products/${product.id}`, productData, {
          baseURL: API_SERVER,
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      dispatch(uiActions.success("تم إضافة المنتج"));
      clearInputs();
      console.log(productData);
    } catch (error) {
      dispatch(uiActions.error("حدث خطأ أثناء إضافة المنتج"));
      console.log(error);
    }
    setTimeout(() => {
      dispatch(uiActions.clear());
    }, 3 * 1000);
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormInput
        label="اسم المنتج"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormInput
        label="سعر المنتج"
        name="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {!product && (
        <FormInput
          label="صورة المنتج"
          name="image"
          type="file"
          onChange={selectImageFile}
        />
      )}
      {!product && (
        <FormInput
          label="صورة الغلاف"
          name="cover"
          type="file"
          onChange={selectCoverImageFile}
        />
      )}
      <FormInput
        label="وصف المنتج"
        name="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <label
          htmlFor="category"
          className="block font-medium mb-2 text-primary-dark-3"
        >
          الفئة
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          className={`w-full p-2 rounded-lg bg-primary-light-2 focus:outline-none focus:shadow-[0_0_0_8px_rgba(254,239,220)] placeholder:text-primary placeholder:text-sm sm:placeholder:text-base text-primary-dark-1 `}
        >
          <option value={"6454fe220bbe3cf2b788cb04"}>Skin Care</option>
          <option value={"6467b2590dcd55b1a25ddf3a"}>Hair Care</option>
        </select>
      </div>
      <FormInput
        label="ميزة 1"
        name="feature1"
        type="text"
        value={feature1}
        onChange={(e) => setFeature1(e.target.value)}
      />
      <FormInput
        label="ميزة 2"
        name="feature2"
        type="text"
        value={feature2}
        onChange={(e) => setFeature2(e.target.value)}
      />
      <FormInput
        label="ميزة 3"
        name="feature3"
        type="text"
        value={feature3}
        onChange={(e) => setFeature3(e.target.value)}
      />
      <FormInput
        label="ميزة 4"
        name="feature4"
        type="text"
        value={feature4}
        onChange={(e) => setFeature4(e.target.value)}
      />
      <FormInput
        label="ميزة 5"
        name="feature5"
        type="text"
        value={feature5}
        onChange={(e) => setFeature5(e.target.value)}
        required={false}
      />
      <FormInput
        label="ميزة 6"
        name="feature6"
        type="text"
        value={feature6}
        onChange={(e) => setFeature6(e.target.value)}
        required={false}
      />
      <FormInput
        label="ميزة 7"
        name="feature7"
        type="text"
        value={feature7}
        onChange={(e) => setFeature7(e.target.value)}
        required={false}
      />
      <FormInput
        label="ميزة 8"
        name="feature8"
        type="text"
        value={feature8}
        onChange={(e) => setFeature8(e.target.value)}
        required={false}
      />
      <Button submit className="mt-4">
        إضافة المنتج
      </Button>
    </Form>
  );
};

export default ProductForm;
