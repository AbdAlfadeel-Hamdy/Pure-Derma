import classNames from "classnames";

const Notification = ({ notification }) => {
  const className = classNames({
    "fixed top-0 z-10 w-screen h-20 flex text-white items-center px-8 sm:px-10 lg:px-12 xl:px-16 justify-center": true,
    "bg-primary": notification.status === "pending",
    "bg-green-600": notification.status === "success",
    "bg-red-600": notification.status === "error",
  });
  return <p className={className}>{notification.message}</p>;
};

export default Notification;
