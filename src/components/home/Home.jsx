import Hero from "../hero/Hero";
import Category from "../category/Category";
import Values from "../values/Values";
import Products from "../products/Products";
import Discount from "../discount/Discount";
import Process from "../process/Process";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="shop">
        <Category />
      </section>
      <Values />
      <section id="product">
        <Products />
      </section>
      <Discount />
      <section id="process">
        <Process />
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
