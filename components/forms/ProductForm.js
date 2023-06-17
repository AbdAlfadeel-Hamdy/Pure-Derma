import { useRef, useState } from "react";
import Form from "./Form";
import FormInput from "./FormInput";
import Button from "../ui/Button";
import axios from "axios";
import { API_SERVER } from "@/lib/constants";
import { uiActions } from "@/store/ui-slice";
import { useDispatch } from "react-redux";
const ProductForm = () => {
  const dispatch = useDispatch();
  const nameInput = useRef();
  const priceInput = useRef();
  const [image, setImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const descriptionInput = useRef();
  const [category, setCategory] = useState("6454fe220bbe3cf2b788cb04");
  const featureInput1 = useRef();
  const featureInput2 = useRef();
  const featureInput3 = useRef();
  const featureInput4 = useRef();
  const featureInput5 = useRef();
  const featureInput6 = useRef();
  const featureInput7 = useRef();
  const featureInput8 = useRef();

  const selectImageFile = (e) => {
    setImage(e.target.files[0]);
  };
  const selectCoverImageFile = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const clearInputs = () => {
    nameInput.current.value = "";
    priceInput.current.value = "";
    setImage("");
    setCoverImage("");
    descriptionInput.current.value = "";
    setCategory("");
    featureInput1.current.value = "";
    featureInput2.current.value = "";
    featureInput3.current.value = "";
    featureInput4.current.value = "";
    featureInput5.current.value = "";
    featureInput6.current.value = "";
    featureInput7.current.value = "";
    featureInput8.current.value = "";
  };

  const submitHandler = async (e) => {
    const features = [
      featureInput1.current.value,
      featureInput2.current.value,
      featureInput3.current.value,
      featureInput4.current.value,
      featureInput5.current.value,
      featureInput6.current.value,
      featureInput7.current.value,
      featureInput8.current.value,
    ];

    const modifiedFeatures = features.filter((feat) => feat !== "");
    e.preventDefault();

    const imageFormData = new FormData();
    imageFormData.append("image", image);

    const coverImageFormData = new FormData();
    coverImageFormData.append("imageCover", coverImage);

    const productData = {
      name: nameInput.current.value,
      price: priceInput.current.value,
      category,
      description: descriptionInput.current.value,
      features: modifiedFeatures,
      detailsImage: imageFormData.get("image"),
      imageCover: coverImageFormData.get("imageCover"),
    };

    try {
      dispatch(uiActions.send("جاري إضافة المنتج"));
      await axios.post("/products", productData, {
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
        inputRef={nameInput}
      />
      <FormInput
        label="سعر المنتج"
        name="price"
        type="number"
        inputRef={priceInput}
      />
      <FormInput
        label="صورة المنتج"
        name="image"
        type="file"
        onChange={selectImageFile}
      />
      <FormInput
        label="صورة الغلاف"
        name="cover"
        type="file"
        onChange={selectCoverImageFile}
      />
      <FormInput
        label="وصف المنتج"
        name="description"
        type="text"
        inputRef={descriptionInput}
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
        inputRef={featureInput1}
      />
      <FormInput
        label="ميزة 2"
        name="feature2"
        type="text"
        inputRef={featureInput2}
      />
      <FormInput
        label="ميزة 3"
        name="feature3"
        type="text"
        inputRef={featureInput3}
      />
      <FormInput
        label="ميزة 4"
        name="feature4"
        type="text"
        inputRef={featureInput4}
      />
      <FormInput
        label="ميزة 5"
        name="feature5"
        type="text"
        inputRef={featureInput5}
        required={false}
      />
      <FormInput
        label="ميزة 6"
        name="feature6"
        type="text"
        inputRef={featureInput6}
        required={false}
      />
      <FormInput
        label="ميزة 7"
        name="feature7"
        type="text"
        inputRef={featureInput7}
        required={false}
      />
      <FormInput
        label="ميزة 8"
        name="feature8"
        type="text"
        inputRef={featureInput8}
        required={false}
      />
      <Button submit className="mt-4">
        إضافة المنتج
      </Button>
    </Form>
  );
};

export default ProductForm;
