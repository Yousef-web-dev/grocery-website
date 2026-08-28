import CategoryPage from "../categorypage/CategoryPage";
import BgSeaFood from "../../assets/seafood-banner.webp"; 

const SeaFood = () => {
  return (
    <div>
      <CategoryPage 
        title="Meat & Seafood" 
        bgImage={BgSeaFood} 
        category="SeaFood" 
      />
    </div>
  );
};

export default SeaFood;