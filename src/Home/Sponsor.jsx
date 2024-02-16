import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

function Sponsor() {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="sectiom-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              autoplay={
                 {
                    delay:2000,
                    disableOnInteraction:false
                 }
              }
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >

          <SwiperSlide><img src="/src/assets/images/sponsor/01.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/images/sponsor/02.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/images/sponsor/03.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/images/sponsor/04.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/images/sponsor/05.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/images/sponsor/06.png" alt="" /></SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
