import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isTabScreen, setIsTabScreen] = useState(false);

  const updateSwiperConfig = () => {
    const screenWidth = window.innerWidth;
    setIsTabScreen(screenWidth <= 990);
  };

  useEffect(() => {
    updateSwiperConfig();
    window.addEventListener("resize", updateSwiperConfig);
    return () => {
      window.removeEventListener("resize", updateSwiperConfig);
    };
  }, []);

  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper-container").swiper;
    swiperInstance.update();
  }, [isTabScreen]);

  return (
    <div className="container">
      <h1 style={{ opacity: 1, transform: "translateY(0)" }}>
        CROSS COUNTRY? WE HEAR YOU!
      </h1>
      <div>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          effect={isTabScreen ? "slide" : "coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: isTabScreen ? 0 : 300,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={isTabScreen ? 1.5 : 2}
          centeredSlides
          initialSlide={1}
          style={{ height: isTabScreen ? "300px" : "500px" }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className="swiper-container"
        >
          <SwiperSlide className="swiper-slide">
            <iframe
              title="Video 1"
              src="https://www.youtube.com/embed/ISuFS0leNzA?si=b2q9NWYR6FnnMDCM"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <iframe
              title="Video 2"
              src="https://www.youtube.com/embed/5P6fmJuoTjU?si=nKhV6QA8maLXZWQU"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <iframe
              title="Video 3"
              src="https://www.youtube.com/embed/a_KE1CVPT48?si=xmPrmqL9fsyB3OIr"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
