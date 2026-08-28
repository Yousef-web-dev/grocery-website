import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
