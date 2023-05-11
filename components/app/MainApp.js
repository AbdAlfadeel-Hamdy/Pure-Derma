import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import { useSelector } from "react-redux";
import Notification from "../ui/Notification";

const MainApp = ({ children }) => {
  const notification = useSelector((state) => state.ui.notification);
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
