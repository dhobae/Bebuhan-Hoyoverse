/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import CubesAnimate from "../components/home/CubesAnimate.jsx";
import VidAnimate from "../components/home/VidAnimate.jsx";
import Slide1 from "../components/home/Slide1.jsx";
import Slide2 from "../components/home/Slide2.jsx";
import Slide3 from "../components/home/Slide3.jsx";
import Slide4 from "../components/home/Slide4.jsx";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null); // No need to store total slides, Swiper provides this

  const handleArrowClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(1); // Directly use the slideTo method
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex); // Use realIndex for the actual slide number
    // console.log("Total Slides:", swiper.slides.length); // total slide
  };

  return (
    <>
      {/* wraps */}
      <div id="swiper-wraps" className="w-auto h-screen z-10">
        {/* background kotak-kotak transparan animasi */}
        {/* carousel */}
        <VidAnimate />
        {/* <CubesAnimate /> */}
        <Swiper
          onInit={(swiper) => {
            swiperRef.current = swiper; // Get the Swiper instance in onInit
          }}
          onSlideChange={handleSlideChange}
          style={{
            "--swiper-pagination-color": "#FFF",
            "--swiper-pagination-bullet-inactive-color": "#94a3b8",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "14px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          direction={"vertical"}
          slidesPerView={1}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper w-full h-screen" // Tilføjer en klasse for nem styling
        >
          <SwiperSlide>
            <Slide1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide3 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide4 />
          </SwiperSlide>
        </Swiper>

        <div
          className={`flex absolute z-[100] bottom-2 left-1/2 transform -translate-x-1/2 justify-center mb-4 w-1/3 `}
        >
          <button
            className="text-white hover:text-slate-100 focus:outline-none"
            onClick={handleArrowClick}
          >
            <div className="flex flex-col justify-center items-center gap-1">
              {currentSlide === 0 && (
                <>
                  {/* <span className="font-light">Scroll Down</span> */}
                  <FaArrowDown className="font-semibold text-2xl text-white " />
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

// onSwiper={(swiper) => {
//   handleSwiper(swiper);
//   swiperRef.current = swiper;
// }}
// onSwiper={handleSwiper}

// benar!
// import { Mousewheel, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// {/* <Swiper
//   direction={"vertical"}
//   slidesPerView={1}
//   mousewheel={true}
//   pagination={{
//     clickable: true,
//   }}
//   modules={[Mousewheel, Pagination]}
//   className="mySwiper w-full h-screen cursor-pointer" // Tilføjer en klasse for nem styling
// >
//   {/* Dine SwiperSlides */}
//   <SwiperSlide>
//     <img
//       className="block w-full h-full object-cover"
//       src="https://anime-website-ui-bootstrap.vercel.app/assets/rin.png"
//       alt=""
//     />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img
//       className="block w-full h-full object-cover"
//       src="https://anime-website-ui-bootstrap.vercel.app/assets/saber.jpg"
//       alt=""
//     />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img
//       className="block w-full h-full object-cover"
//       src="https://anime-website-ui-bootstrap.vercel.app/assets/matousakura.jpg"
//       alt=""
//     />
//   </SwiperSlide>
//   {/* ...flere slides efter behov */}
// </Swiper>; */}
