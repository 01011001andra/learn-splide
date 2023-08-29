import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("slider.json") // Ganti dengan URL JSON yang sesuai
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }, []);

  function handleChange(e) {
    setIndex(e.activeIndex);
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex max-w-7xl mx-auto lg:flex-row flex-col w-full items-center justify-center">
      <div
        className="w-1/2 hidden lg:flex lg:gap-20 items-center flex-col h-full"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <img src={images[index]?.src} alt="a" className="w-52" />
        <h1>{images[index]?.description}</h1>
        <button className="btn btn-primary">OPEN</button>
      </div>
      <button
        className="px-2 text-4xl font-bold"
        onClick={() => {
          const swiper = document.querySelector(".mySwiper").swiper;
          swiper.slideNext();
        }}
      >
        TEKAN INI
      </button>
      <div className="w-full lg:w-1/2 h-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={handleChange}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "15px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="border-4 rounded-lg border-white "
            >
              <div
                className="w-full h-full p-9"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="image-info">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                  <button
                    onClick={() => {
                      alert("wtf");
                    }}
                  >
                    hei
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
