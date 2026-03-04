import React from "react";
import testimonial from "../../data/testimonial";
// import { FaLinkedin } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";




// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";

const Testimonials = () => {
  const testimonials = testimonial;

  return (
    <section id="testimonials">
      <h5>What People are Saying</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
  
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {testimonials.map((testy) => (
          <SwiperSlide className="testimonial" key={testy.id}>
            <div className="client__avatar">
              <a href={testy.link} target="_blank">
                <BsBrowserChrome />
              </a>
            </div>
            <h5 className="client__name">{testy.name}</h5>
            <h6 className="client__name">{testy.role}</h6>

            <small className="client__review">{testy.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;