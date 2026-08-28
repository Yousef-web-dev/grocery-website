import CategoryPage from "../categorypage/CategoryPage";
import BgDairy from "../../assets/dairy-banner.webp"; 

const Dairy = () => {
  return (
    <div>
      <CategoryPage 
        title="Dairy & Eggs" 
        bgImage={BgDairy} 
        category="Dairy" 
      />
    </div>
  );
};

export default Dairy;