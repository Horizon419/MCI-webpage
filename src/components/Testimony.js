import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {ImQuotesLeft} from 'react-icons/im'
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from '../images/john.jpg';
import profilePic2 from "../images/presh.jpeg";
import profilePic3 from "../images/jaff.jpeg";
import profilePic4 from "../images/sam.jpeg";
import profilePic5 from "../images/linda.jpeg";
import profilePic6 from "../images/deby.jpeg";

const Testimony = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "The class was fun and enjoying. I really loved learning in the class as the tutors there were kind and helpful. They taught me many things I had not known and I got my certificate happily. I am grateful to my tutors for providing and guiding me through this fun and nourishing experience. MCI Academy is a fun place to go and I would recommend it to my friends. Thank you fellow friends and teachers for helping me through coding. 😷 LOVE YOU! 😁😁😁",
    },
    {
      img: profilePic2,
      review:
        "The MCI coding class of 2022, which happens to be the very first class was no doubt a period to be ever grateful of. “Education is not just the learning of facts but an avenue were characters are built and self discoveries made.  Having very keen Tutors was something anyone would applaud, they were always willing and ready to see you at the best. Of course, my team mates during the coding class were awesome! Fun, patience, discipline, self denial, motivation and more were all experienced. MCI coding class is the best place to grow coding and even to become a better person as a web programmer and by extension a better human being. I love MCI, I love Coding and I appreciate the best training I ever had as a beginner.🥰🥰❤️",
    },
    {
      img: profilePic3,
      review:
        "I still remember I joined this school on february 2022 when Asuu started their strike,i would say its only the love from God that got me in contact with this great leaders ,they are so so good in what they do ,to wrap it all' they are a great definition of leaders .  It was more difficult for me  to accomplish the projects and tasks you assigned to us but I did it finally  , You all have spent extra hours and shown special care to me in order to prepare me for the ‘real world,Thank you all and God bless you.",
    },
    {
      img: profilePic4,
      review:
        "It was a beautiful experience getting to learn codes from scratch, all thanks to our tutors for their patience, even though I felt like giving up along the line but their encouragement and zeal kept me going to the happy ending.",
    },
    {
      img: profilePic5,
      review:
        "Learning Programming is an experience that I won't forget anytime soon. There were times that I wanted to give up or rather I gave up but all thanks to the push from MCI family I decided to push further and I am grateful I did. I appreciate",
    },
    {
      img: profilePic6,
      review:
        "Applying for Careers in Code was one of the best decisions I've made in my entire life! Over the course of 6 months, I went from a little knowledge of HTML and CSS to a full-stack JavaScript web developer. The instructors  were always willing to go out of their way to help with anything we needed throughout the duration of class. I'm thrilled I got the opportunity to train in a field that I'm passionate about and I look forward to contributing to MCI Academy",
    },
    {
      img: profilePic4,
      review:
        "It was a beautiful experience getting to learn codes from scratch, all thanks to our tutors for their patience, even though I felt like giving up along the line but their encouragement and zeal kept me going to the happy ending.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>{<ImQuotesLeft />}</span>
        <span>Testimonies From Our Students</span>
        <div className="blur t-blur1" style={{ background: "blue" }}></div>
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

export default Testimony;
