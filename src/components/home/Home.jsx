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
      <Category />
      <section id="about" className="scroll-mt-24">
        <Values />
      </section>
      <Products />
      <Discount />
      <section id="process" className="scroll-mt-24">
        <Process />
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
