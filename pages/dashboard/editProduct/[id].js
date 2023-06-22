import ProductForm from "@/components/forms/ProductForm";
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import axios from "axios";
import { API_SERVER } from "@/lib/constants";

const DashboardPage = () => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const [product, setProduct] = useState();
  const router = useRouter();
  useEffect(() => {
    const getProductInfo = async () => {
      try {
        if (!router.query.id) throw new Error("No query found");
        const response = await axios.get(`/products/${router.query.id}`, {
          baseURL: API_SERVER,
          withCredentials: true,
        });
        const { data } = response;
        setProduct(data.doc);
      } catch (err) {
        console.log(err);
      }
    };
    getProductInfo();

    const timer = setTimeout(() => {
      if (!loggedInUser || loggedInUser.role !== "admin") Router.push("/auth");
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [loggedInUser, router.query.id]);
  return (
    <section className="p-8 sm:p-10 lg:p-12 xl:p-16 ">
      <div className="p-8 sm:p-10 xl:p-16 border-b-2">
        <h1 className="text-center text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 lg:mb-8">
          تعديل منتج
        </h1>
        {product && <ProductForm product={product} />}
      </div>
      <div className=" pt-4 sm:pt-8 lg:pt-12 flex flex-col gap-2 sm:gap-4 lg:gap-8 max-w-[200px] mx-auto items-center">
        <Button primary href={"/home"}>
          عودة للصفحة الرئيسية
        </Button>
      </div>
    </section>
  );
};

export default DashboardPage;
