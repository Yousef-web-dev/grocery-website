import React, { useRef, useEffect } from "react";
import Heading from "../heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";

import "swiper/css";
import "aos/dist/aos.css";

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      profession: "Working Mom",
      rating: 5,
      para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and extremely reliable.",
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 2,
      name: "David Miller",
      profession: "Fitness Trainer",
      rating: 5,
      para: "Finding organic and high-protein nutrition sources used to be a challenge. With FreshBasket, I get all my meal-prep essentials delivered right to my door on time.",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      profession: "Nutritionist",
      rating: 4,
      para: "I always recommend FreshBasket to my clients. The transparency in product quality and the wide range of fresh, whole foods make healthy eating effortless.",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 4,
      name: "Emily Johnson",
      profession: "Food Blogger",
      rating: 5,
      para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface!",
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div data-aos="fade-right" data-aos-duration="800">
            <Heading highlight="Customers" heading="Saying" />
          </div>

          {/* Swiper Navigation Buttons */}
          <div 
            data-aos="fade-left" 
            data-aos-duration="800"
            className="flex gap-x-3 self-end sm:self-auto"
          >
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous Slide"
              className="text-2xl bg-zinc-100 rounded-xl w-12 h-12 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-all duration-300 hover:shadow-md active:scale-95"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next Slide"
              className="text-2xl bg-zinc-100 rounded-lg w-12 h-12 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-all duration-300 hover:shadow-md active:scale-95"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Swiper Cards */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-10 sm:mt-14">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!pb-6 !pt-2"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="bg-zinc-100/80 hover:bg-white p-7 rounded-2xl border border-transparent hover:border-zinc-200 transition-all duration-300 hover:shadow-xl flex flex-col justify-between h-full group cursor-grab active:cursor-grabbing"
                >
                  <div>
                    {/* Customer Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover p-1 ring-2 ring-orange-500 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div>
                        <h4 className="text-zinc-800 text-xl font-bold group-hover:text-orange-500 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-zinc-500 text-sm mt-0.5">
                          {item.profession}
                        </p>

                        {/* Stars */}
                        <div className="flex gap-1 text-amber-400 mt-1.5 text-sm">
                          {Array.from({ length: item.rating }, (_, index) => (
                            <FaStar key={index} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-zinc-600 text-sm sm:text-base mt-6 leading-relaxed group-hover:text-zinc-700 transition-colors">
                      "{item.para}"
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;