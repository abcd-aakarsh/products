import { Link } from "react-router-dom";

const ElevateCards = ({ data }) => {
  return (
    <div>
      <div
        className={`border border-black pt-28 lg:pt-56 lg:pb-8 lg:px-8 px-2 text-gray-100 ${data.img} bg-cover w-full`}
      >
        <h3 className="text-xl lg:text-3xl font-semibold mb-3">{data.title}</h3>
        <p className="tracking-normal text-sm lg:text-lg mb-5">
          {data.paragraph}
        </p>
        <div className=" flex lg:inline-block lg:px-8 justify-center items-center py-2 mb-8 bg-white text-black hover:bg-black hover:text-white transition delay-75 ease-linear ">
          <Link className="">SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default ElevateCards;
