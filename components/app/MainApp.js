import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../ui/Notification";
import { useEffect } from "react";
import { authActions } from "@/store/auth-slice";
import { useRouter } from "next/router";

const MainApp = ({ children }) => {
  const router = useRouter();
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (loggedInUser)
      dispatch(authActions.persistUser({ loggedInUser, wishlist }));
  }, []);
  if (router.asPath === "/")
    return <main className="flex-1 bg-[#f5f5ef]">{children}</main>;
  return (
    <div className="bg-gray-light-1 lg:mx-auto ">
      {notification && <Notification notification={notification} />}
      <Header />
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainApp;
