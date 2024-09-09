import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className=" text-gray-200  bg-hero-mob sm:bg-hero-desk bg-cover max-w-full xl:px-8  ">
        <div className=" py-24 px-4 text-center md:text-start sm:px-8  md:py-28 max-w-full md:max-w-3/4 xl:py-48 xl:w-1/2  md:mx-auto lg:mx-0 md:px-12 lg:px-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl hover:text-green-400 lg:text-7xl mb-4 md:mb-8  ">
            Raining Offers For Hot Summer!
          </h2>
          <h3 className="text-xl sm:text-2xl  lg:text-3xl mb-8 ">
            25% Off On All Products
          </h3>
          <div className="gap-4 flex flex-col px-2 sm:flex-row sm:justify-center sm:items-center md:justify-start md:px-0 ">
            <Link className=" px-5 transition ease-linear delay-75 py-3 bg-white hover:bg-black hover:text-white text-black">
              SHOP NOW
            </Link>
            <Link className="border transition ease-linear delay-75 px-5 py-3 bg-transparent hover:bg-white hover:text-black text-white">
              FIND MORE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
