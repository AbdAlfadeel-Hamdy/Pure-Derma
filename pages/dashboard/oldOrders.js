import { useSelector } from "react-redux";
import Router from "next/router";
import { useEffect } from "react";
import OldOrdersList from "@/components/orders/OldOrdersList";
import Button from "@/components/ui/Button";

const OldOrdersPage = () => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loggedInUser || loggedInUser.role !== "admin") Router.push("/auth");
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [loggedInUser]);
  return (
    <section className="p-8 sm:p-10 lg:p-12 xl:p-16 ">
      <div className="p-4 sm:p-10 xl:p-16 border-b-2">
        <h1 className="text-center text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 lg:mb-8">
          الطلبات السابقة
        </h1>
        <OldOrdersList />
      </div>
      <div className=" pt-4 sm:pt-8 lg:pt-12 flex flex-col gap-2 sm:gap-4 lg:gap-8 max-w-[200px] mx-auto items-center">
        <Button primary href={"/dashboard"}>
          عودة للطلبات الجديدة
        </Button>
        <Button primary href={"/dashboard/addProduct"}>
          إضافة منتج
        </Button>
      </div>
    </section>
  );
};

export default OldOrdersPage;
