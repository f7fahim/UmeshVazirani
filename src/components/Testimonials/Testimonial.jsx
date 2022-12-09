import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";
import profilePic7 from "../../img/profile7.jpg";
 

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I am FAHIM HOSSAIN. Department of Computer Science and Engineering. I can provide you best services in web desinging and development .  I am wordpress expert . I can help you in any kind of websites such as website redesinging ,commercial , product selling , development and all types of  website desinging and development work . ",
    },
    {
      img: profilePic2,
      review:
        "I can provide you best services in web desinging and development .  I am wordpress expert . I can help you in any kind of websites such as website redesinging ,commercial , product selling , development and all types of  website desinging and development work .",
    },
    {
      img: profilePic3,
      review:
        "I can provide you best services in web desinging and development .  I am wordpress expert . I can help you in any kind of websites such as website redesinging ,commercial , product selling , development and all types of  website desinging and development work .",
    },
    {
      img: profilePic4,
      review:
        "I can provide you best services in web desinging and development .  I am wordpress expert . I can help you in any kind of websites such as website redesinging ,commercial , product selling , development and all types of  website desinging and development work .",
    },
    {
      img: profilePic5,
      review:
        "I can provide you best services in web desinging and development .  I am wordpress expert . I can help you in any kind of websites such as website redesinging ,commercial , product selling , development and all types of  website desinging and development work .",
    },
    {
      img: profilePic6,
      review:
        "I can provide you best services in web desinging and development .  I am wordpress expert . I can help you in any kind of websites such as website redesinging ,commercial , product selling , development and all types of  website desinging and development work .",
    },
    {
      img: profilePic7,
      review:
        "I can provide you best services in web desinging and development .  I am wordpress expert . I can help you in any kind of websites such as website redesinging ,commercial , product selling , development and all types of  website desinging and development work ..",
    },
    
     
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>The Members of this </span>
        <span>Project </span>
        <span>working group...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
