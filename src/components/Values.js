
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hub from '../images/hub.png';
import Gpt from "../images/gpt.png";
import Gym from "../images/gym.png";
import Hu from "../images/login.png";



const Values = () => {
  
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Students Project</span>
      <span></span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Hu} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gym} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gpt} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hub} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}; 
export default Values