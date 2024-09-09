import ElevateCards from "./ElevateCards";
import { elevateData } from "../../utils/cardsData";
const ElevateSection = () => {
  return (
    <div className="max-w-[1420px] mx-auto  py-8 lg:py-28 lg:px-32 px-4">
      <div className="text-black text-center pb-8 lg:pb-16 ">
        <h3 className="text-2xl lg:text-4xl font-semibold">
          Elevate your style
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4">
        {elevateData?.map((element) => (
          <ElevateCards data={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default ElevateSection;
