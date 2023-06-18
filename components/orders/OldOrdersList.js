import { API_SERVER } from "@/lib/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

const OldOrdersList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get("/orders", {
        params: {
          isDelivered: true,
        },
        baseURL: API_SERVER,
        withCredentials: true,
      });
      const { data } = response;
      setOrders(data.doc);
    };
    getOrders();
  }, []);

  if (orders.length === 0) return <p className="text-center">لا يوجد طلبات</p>;
  return (
    <ul className="max-w-[500px] mx-auto flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {orders.map((order) => (
        <OrderItem key={order._id} order={order} old={true} />
      ))}
    </ul>
  );
};

export default OldOrdersList;
