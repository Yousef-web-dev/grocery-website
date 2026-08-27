import CategoryPage from "../categorypage/CategoryPage";
import BgFruits from "../../assets/Fruits-banner.webp"; // تأكد من اسم ومسار الصورة

const Fruits = () => {
  return (
    <div>
      <CategoryPage 
        title="Fruits & Veggies" 
        bgImage={BgFruits} 
        category="Fruits" 
      />
    </div>
  );
};

export default Fruits;