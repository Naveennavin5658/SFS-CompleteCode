import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './custom.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//importing images
import vision1 from ".//assests/vision2.png";
import vision2 from ".//assests/vision.png"
import FounderImage from ".//assests/founderImage.jpg";
import patron from ".//assests/patron.jpg";
import staffpic from "./assests/staff.jpg";
import mission from "./assests/mission.jpg"
import m from "./assests/m.png"

export default function App() {
  return (
    <div className="swiper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="s-head">
          <h1>ABOUT OUR FOUNDER</h1>
          <h4 style={{marginTop: "-10px"}}>
            Venerable FR. PETER MERMIER - The founder of M.S.F.S. Congregation
          </h4>
          </div>
          <div className="content-s">
            <img
              src={FounderImage}
              style={{ height: "350px", width: "350px", borderRadius: "10%" }}
              alt="Founder pic"
            />
            <p>
              
              <b>
                Born on 28th August 1790 at Chaumount, Savoy, France of peasant
                family. <br />
                Parents: Francis Mermier and Antointte Bastian. <br />
                Major Seminary Studies; at Chambery from 1802 - 1809. <br />
                Ordination: 1813. <br />
                Assistant Parish Priest: at Magland 1813. <br />
                Teacher: at Milan 1816. <br />
                Parish Priest: at Le Chatelard 1819. <br />
                The First Parish Mission: 1821. <br />
                Community Formation at La Roche, 1834. <br />
                Profession of Religious Vows:(The vows of stability) 1834.{" "}
                <br />
                Founded the Religious Congregation of the Daughters of the Cross
                at Chavanod in 1841. <br />
                Died: 30-9-1862, Declared Venerable by the Church in 1989.
              </b>{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="s-head">
          <h1>ABOUT OUR PATRON</h1>
          <h4 style={{marginTop: "-10px"}}>
          The Short History of St. Francis de Sales (S.F.S)-(1567 -1622)
          </h4>
          </div>
          <div className="content-s">
            <img
              src={patron}
              style={{ height: "350px", width: "350px", borderRadius: "10%" }}
              alt="Founder pic"
            />
            <p>
                  <b>
                    Born at Thorens, Savoy, France, on 21st August 1567.
                    <br /> Ordined Priest 1593. Missionary in Chablais 1594 -
                    98.
                    <br /> Co-adjutor to the Bishop of Geneva 1599.
                    <br /> Bishop of Geneva 1602.
                    <br /> Died at Lynos, Dec 28th 1622.
                    <br /> His writings : "Introduction to devout Life" (1609)
                    and "Love of God" (1616).
                    <br /> Declared blessed by Alexander VII Dec, 28th, 1661.{" "}
                    <br />
                    Canonized Saint-Alexander VII April 19th, 1665. <br />
                    Doctor of the Church - Plus IX July 7th, 1877.{" "}
                  </b>
                </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide><div className="s-head">
          <h1>OUR VISION</h1>
          
          </div>
          <div className="content-s">
            <img
              src={vision2}
              style={{ height: "350px", width: "350px", borderRadius: "10%" }}
              alt="Founder pic"
            />
           <p>
                  <b>
                    A holistic society of compassionately human, spiritually
                    enlightened, <br/> intellectually awakened, professionally
                    skilled, socially committed and <br/>  culturally integrated
                    persons, based on the values as lived and taught by Jesus
                    Christ and followed by Saint Francis de Sales. We equip the
                    younger  generation with necessary life-skills to become:
                    Catalysts of Social Transformation, Votaries of National
                    Integration & Ambassadors of  Universal Brotherhood. We
                    foster a caring and humane society meant to <br/>  promote  the
                    marginalized.
                  </b>
                </p>
          </div></SwiperSlide>
        <SwiperSlide><div className="s-head">
          <h1> OUR MISSION</h1>
          
          </div>
          <div className="content-s">
            <img
              src={vision1}
              style={{ height: "350px", width: "350px", borderRadius: "10%" }}
              alt="Founder pic"
            />
           <p>
                  <b>
                    To provide a conducive atmosphere for intellectual
                    development.<br/> To facilitate conviction-based spiritual
                    formation.
                    <br></br>To nurture a sense of the Divine and transcendence.
                    <br></br>
                    To imbue the virtues of gentleness, compassion and optimism.
                    <br></br>To impart authentic leadership training.
                    <br></br>To instill wholesome professional ethics.
                    <br></br>To encourage sports, games and work experience.
                    <br></br>To inculcate healthy food habits.
                    <br></br>To promote environmental consciousness.
                    <br></br>To extend integral education to all.
                    <br></br>
                  </b>
                </p>
          </div></SwiperSlide>
        
      </Swiper>
    </div>
  );
}
