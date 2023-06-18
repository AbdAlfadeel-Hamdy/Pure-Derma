import Button from "../ui/Button";

const OrderItem = ({ order, onConfirm, onDelete, old }) => {
  return (
    <li className="border-4 p-2 sm:p-4 lg:p-8 max-w-[500px]">
      <div className="flex justify-between">
        <p>رقم الموبايل</p>
        <p>{order.shippingAddress.phone}</p>
      </div>
      <div className="flex justify-between">
        <p>العميل</p>
        <p>{order.user.name}</p>
      </div>
      <div className="flex justify-between">
        <p>العنوان</p>
        <p>{order.shippingAddress.details}</p>
      </div>
      <div className="flex justify-between border-b-4 pb-4 sm:pb-6 lg:pb-8">
        <p>المحاقظة</p>
        <p>{order.shippingAddress.city}</p>
      </div>
      <h3 className="text-center pt-4 sm:pt-6 lg:pt-8">المشتريات</h3>
      <div className="border-b-4 pb-4 sm:pb-6 lg:pb-8">
        {order.cartItems.map((item) => {
          return (
            <div key={item._id} className="flex justify-between">
              <p>{item.product.name}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between border-b-4 py-2 sm:py-4 lg:py-8">
        <p>الحساب</p>
        <p>{order.totalOrderPrice}</p>
      </div>
      {!old && (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 pt-4 sm:pt-8 lg:pt-12">
          <Button
            primary
            className="flex-1"
            onClick={() => onConfirm(order._id)}
          >
            تأكيد وصول الأوردر
          </Button>
          <Button
            secondary
            className="flex-1"
            onClick={() => onDelete(order._id)}
          >
            حذف الأوردر
          </Button>
        </div>
      )}
    </li>
  );
};

export default OrderItem;
