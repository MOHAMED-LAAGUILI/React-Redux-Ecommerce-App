import TopProductsCard from "./TopProductsCards";
import Categories from "./Categories";
import Services from "./Services";
import SpecialCategories from "./SpecialCategories";
import HeroCardImage from './HeroCardImage';
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Card */}
      <Categories />

      {/* Hero Image Card */}
      <HeroCardImage />
      
      {/* Custom Services Cards */}
      <Services />

      {/* Special Categories Section */}
      <SpecialCategories />

      {/* Top 3 Products Card */}
      <TopProductsCard />

      <div className={"flex justify-center mt-10"}>
        <Link
          to="/shop"
          className=" flex text-white font-bold text-center px-8 py-4 text-lg bg-red-600 hover:bg-red-900 transition-colors rounded-full shadow-lg"
        >
          <span>See more on Shop</span> <FaArrowCircleRight className={"text-2xl pt-2 ms-3"}/>
        </Link>
      </div>

    </div>
  );
}
