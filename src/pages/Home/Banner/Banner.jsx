// Import Swiper React components
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slider from "../../../components/Slider";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: "#custom-prev-button",
          nextEl: "#custom-next-button",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider
            title1st={"Empower"}
            title2nd={"Communities"}
            desc={
              "Take action and empower communities through volunteerism. Join us in creating sustainable solutions, fostering growth, and building stronger, more resilient neighborhoods together."
            }
            photo={"https://i.ibb.co/R4t8p6S/pexels-hillaryfox-1595385.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            title1st={"Make"}
            title2nd={"a Difference"}
            desc={
              "Join our community of volunteers and become part of something meaningful. Make a positive impact on your community and the world by lending a helping hand."
            }
            photo={"https://i.ibb.co/bN8TRNH/pexels-rdne-6646914.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            title1st={"Find"}
            title2nd={"Your Passion"}
            desc={
              "Discover volunteer opportunities that match your interests and skills. Whether it's environmental conservation, humanitarian aid, or animal welfare, there's a cause waiting for your support."
            }
            photo={"https://i.ibb.co/b1NRyDq/pexels-rdne-6646992.jpg"}
          />
        </SwiperSlide>
        {/* custom next prev button */}
        <div className=" absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8 z-[200] md:-translate-x-0 md:justify-between md:left-3 md:right-3 md:bottom-1/2 md:-translate-y-1/2">
          <div id="custom-prev-button">
            <CustomPrevButton />
          </div>
          <div id="custom-next-button">
            <CustomNextButton />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;

// eslint-disable-next-line react/prop-types
const CustomPrevButton = ({ onClick }) => {
  return (
    <button
      className="custom-prev-button size-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-purple-500 to-pink-500"
      onClick={onClick}
    >
      <FaLongArrowAltLeft className="text-white text-xl" />
    </button>
  );
};

// eslint-disable-next-line react/prop-types
const CustomNextButton = ({ onClick }) => {
  return (
    <button
      className="custom-next-button size-10 rounded-full flex items-center justify-center bg-gradient-to-tr to-purple-500 from-pink-500"
      onClick={onClick}
    >
      <FaLongArrowAltRight className="text-white text-xl" />
    </button>
  );
};
