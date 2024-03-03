import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AluminiSwipper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//importing images

import one from "./assests/1.jpeg";
import two from "./assests/2.jpeg";
import three from "./assests/3.jpeg";
import four from "./assests/4.jpeg";
import five from "./assests/5.jpeg";
import six from "./assests/6.jpeg";
import seven from "./assests/7.jpeg";
import eight from "./assests/8.jpeg";
import nine from "./assests/9.jpeg";
import ten from "./assests/10.jpeg";

export default function App() {
  return (
    
      <div className="swiper-a">
        <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper-a"
      >
        <SwiperSlide>
          <img src={one}  className="swiper-image" alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two}  className="swiper-image" alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} className="swiper-image"  alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four}  className="swiper-image" alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five}  className="swiper-image" alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} className="swiper-image" alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven}  className="swiper-image" alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eight}  className="swiper-image" alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nine} className="swiper-image" alt="what" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ten}  className="swiper-image" alt="what" />
        </SwiperSlide>
        
      </Swiper>
      </div>
   
  );
}
