import { IoSearch } from "react-icons/io5";

const HeaderForm = () => {
  return (
    <form className="flex items-center justify-center flex-[0_0_100%] md:flex-[0_0_40%] order-1 md:-order-none bg-gray-light-2 md:rounded-full mt-2 md:mt-0">
      <input
        type="text"
        name="search"
        dir="rtl"
        placeholder="ابحث عن منتج"
        className="bg-gray-light-2 w-[90%] rounded-full border-none outline-none ltr:ml-7 rtl:-ml-7 py-[6px] px-4 text-right font-ar placeholder:font-ar text-lg "
      />
      <button className="bg-gray-light-2">
        <IoSearch className="text-gray-dark-3 w-6 h-6" />
      </button>
    </form>
  );
};

export default HeaderForm;
