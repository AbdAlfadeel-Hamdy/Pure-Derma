import ProductForm from "@/components/forms/ProductForm";
import { useSelector } from "react-redux";
import Router from "next/router";
import { useEffect } from "react";

const DashboardPage = () => {
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
    <div>
      <ProductForm />
    </div>
  );
};

export default DashboardPage;
