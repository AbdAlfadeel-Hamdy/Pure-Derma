import { API_SERVER } from "@/lib/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { useDispatch } from "react-redux";
import { uiActions } from "@/store/ui-slice";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get("/orders", {
        params: {
          isDelivered: false,
        },
        baseURL: API_SERVER,
        withCredentials: true,
      });
      const { data } = response;
      setOrders(data.doc);
    };
    getOrders();
  }, []);

  const confirmOrder = async (orderId) => {
    try {
      dispatch(uiActions.send("جاري تنفيذ طلبك"));
      await axios.patch(
        `/orders/${orderId}/deliver`,
        {},
        {
          baseURL: API_SERVER,
          withCredentials: true,
        }
      );
      dispatch(uiActions.success("تم تأكيد طلبك"));
      const updatedOrders = orders.map((order) => {
        if (order._id === orderId) return { ...order, isDelivered: true };
      });
      setOrders(updatedOrders.filter((order) => order.isDelivered === false));
    } catch (err) {
      dispatch(uiActions.error("حدث خطأ أثناء تنفيذ طلبك"));
      console.log(err);
    }
    setTimeout(() => {
      dispatch(uiActions.clear());
    }, 3000);
  };
  const deleteOrder = async (orderId) => {
    try {
      dispatch(uiActions.send("جاري تنفيذ طلبك"));
      await axios.delete(`/orders/${orderId}`, {
        baseURL: API_SERVER,
        withCredentials: true,
      });
      dispatch(uiActions.success("تم تأكيد طلبك"));
      const updatedOrders = orders.filter((order) => order._id !== orderId);
      setOrders(updatedOrders);
    } catch (err) {
      console.log(err);
      dispatch(uiActions.error("حدث خطأ أثناء تنفيذ طلبك"));
    }
    setTimeout(() => {
      dispatch(uiActions.clear());
    }, 3000);
  };
  if (orders.length === 0) return <p className="text-center">لا يوجد طلبات</p>;
  return (
    <ul className="max-w-[500px] mx-auto flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {orders.map((order) => (
        <OrderItem
          key={order._id}
          order={order}
          onConfirm={confirmOrder}
          onDelete={deleteOrder}
        />
      ))}
    </ul>
  );
};

export default OrdersList;
