import React from "react";
import "./TourCard.styles.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import HikingIcon from "@mui/icons-material/Hiking";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay  } from "swiper";
function TourCard() {
  return (
    <div className="tour-card">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
            delay: 5000,
          }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="carosal-section-1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carosal-section-2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carosal-section-3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carosal-section-4"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carosal-section-5"></div>
        </SwiperSlide>
      </Swiper>

      <div className="package-name">
        <h2>Tour Name</h2>
        <div className="package-time">
          <p>4N/5D</p>
        </div>
      </div>
      <ul>
        <li>City Tour</li>
        <li>City Tour</li>
        <li>Private Transfer</li>
      </ul>
      <div className="tour-nights">
        <p>3N Dubai</p>
        <p>2N Dubai Palm</p>
      </div>
      <div className="activites">
        <div className="activity">
          <ApartmentIcon fontSize="large" />
          <AirplanemodeActiveIcon fontSize="large" />
          <HikingIcon fontSize="large" />
          <ArticleIcon fontSize="large" />
        </div>
        <div className="price">
          <p>$10,000</p>
        </div>
      </div>
      <div className="custom-tour">
        <div className="customize">
          <SettingsIcon />
          <p>Customize</p>
        </div>
        <p>Book Now</p>
      </div>
    </div>
  );
}

export default TourCard;
