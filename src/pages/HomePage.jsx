import ElevateSection from "../features/homepage/ElevateSection";
import FeaturedProducts from "../features/homepage/FeaturedProducts";

import HeroSection from "../features/homepage/HeroSection";

const HomePage = () => {
  return (
    <div>
      <div className="w-full">
        <HeroSection />
        <ElevateSection />
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default HomePage;
