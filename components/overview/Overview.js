import { IoLocation, IoStar } from "react-icons/io5";

const Overview = () => {
  return (
    <section
      dir="ltr"
      className="flex items-center border border-gray-light-2 text-[10px] sm:text-base"
    >
      <h1 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-light uppercase tracking-[1px] py-2 px-2 sm:py-4 sm:px-6 lg:py-4 lg:px-8">
        Pure Derma Egypt
      </h1>
      <div className="flex mr-auto">
        <IoStar className="text-[10px] sm:text-sm fill-primary" />
        <IoStar className="text-[10px] sm:text-sm fill-primary" />
        <IoStar className="text-[10px] sm:text-sm fill-primary" />
        <IoStar className="text-[10px] sm:text-sm fill-primary" />
        <IoStar className="text-[10px] sm:text-sm fill-primary" />
      </div>
      <div className="flex">
        <IoLocation className="text-base fill-primary mr-[2px]" />
        <a
          href="https://www.google.com/maps/place/Kafr+El-Shaikh,+Qism+Kafr+El-Shaikh,+Kafr+el-Sheikh,+Gharbia+Governorate/@31.1100588,30.9051646,13z/data=!3m1!4b1!4m6!3m5!1s0x14f7ab78f233021f:0xc2cdebb004a208f8!8m2!3d31.1106593!4d30.9387799!16s%2Fm%2F0276ksn"
          className="text-primary border-b border-current pb-[2px] inline-block hover:text-gray-dark-1 duration-200 focus:animate-pulse text-center"
        >
          Kafr El-Shaikh, Egypt
        </a>
      </div>
    </section>
  );
};

export default Overview;

{
  /* <div className="bg-primary text-white ml-2 sm:ml-6 py-0 px-2 sm:px-4 lg:px-6 flex flex-col items-center justify-center self-stretch ">
        <div className="font-light text-base lg:text-xl">10</div>
        <div className="text-[10px]">مشتركين</div>
      </div> */
}
