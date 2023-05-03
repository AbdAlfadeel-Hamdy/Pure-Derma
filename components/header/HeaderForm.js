import { IoSearch } from "react-icons/io5";

const HeaderForm = () => {
  return (
    <form className="flex items-center justify-center flex-[0_0_100%] sm:flex-[0_0_40%] order-1 sm:-order-none mt-2 sm:mt-0">
      <input
        type="text"
        name="search"
        dir="rtl"
        placeholder="ابحث عن منتج"
        className="bg-gray-light-2 flex-[0_0_100%]  sm:flex-[0_0_90%] sm:focus:flex-[0_0_100%]  duration-200 sm:rounded-full border-none outline-none ltr:ml-8 rtl:-ml-8 py-[6px] px-4 text-right font-ar placeholder:font-ar sm:text-lg "
      />
      <button className="bg-gray-light-2 ml-4">
        <IoSearch className="text-gray-dark-3 w-4 sm:w-6 h-4 sm:h-6" />
      </button>
    </form>
  );
};

export default HeaderForm;
