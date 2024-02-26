import React from "react";
import "./HomePage.css";
// import sfsSchool from "./assests/sfsSchool.JPG";

import staffpic from "./assests/staff.jpg";
import finalstaff from "./assests/finalstaff.jpeg";
import patron from ".//assests/patron.jpg";
import FounderImage from ".//assests/founderImage.jpg";
import logo from ".//assests/logo.png";
import FrSimon from ".//assests/Fr.Simon P.jpg";
import FrPaul from "./assests/Fr. Paul Theneth.jpg";
import FrMathew from "./assests/Fr. Mathew M.jpg";
import FrJose from "./assests/Fr. Jose Ch.jpg";
import FrJerry from "./assests/Fr. Jerry Louis.png";
import FrDhaman from "./assests/Fr. Dhaman K.jpg";
import FrShyju from "./assests/Fr Shyju Chacko.png";
import FrPJMathew from "./assests/Fr P Sundar Rao.jpg";
import FrSundar from "./assests/Fr P Sundar Rao.jpg";
import FrMani from "./assests/Fr Mani Jacob.jpg";
import FrVijay from "./assests/Fr Ch Vijay.jpg";
import FrThomas from "./assests/Fr. Thomas.png";
import Swiper from "./Swiper";
import { alignProperty } from "@mui/material/styles/cssUtils";

function HomePage() {
  return (
    <div>
    <h1 className="school-title-header"><u>SFS School, Tanuku</u></h1>
      <Swiper />
      
      <main className="main-content">
      
        <div className="content">
          <div className="HomeSection1">
          <div className="our-principles">
              <h1 className="section-heading" style={{fontSize: "2rem",paddingTop:"30px"}}>OUR PRINCIPALS</h1>
              <hr style={{width: "400px", height: "2px", color: "black", backgroundColor: "black", marginTop: "-20px"}} />
              <div className="principles-images">
                <div className="principle">
                  <img src={FrSimon} alt="FrSimon" />
                  <p>
                    <b>Fr. Simon P.</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrThomas} alt="FrThomas" />
                  <p>
                    <b>Fr. Thomas Ol.</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrMani} alt="FrMani" />
                  <p>
                    <b>Fr. Mani.Jacob</b>
                  </p>
                </div>

                <div className="principle">
                  <img src={FrDhaman} alt="FrDhaman" />
                  <p>
                    <b>Fr. Dhaman K.</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrPaul} alt="FrSimon" />
                  <p>
                    <b>Fr. Paul Theneth</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrMathew} alt="FrSimon" />
                  <p>
                    <b>Fr. Mathew M</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrJerry} alt="FrSimon" />
                  <p>
                    <b>Fr. Jerry Louis</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrJose} alt="FrSimon" />
                  <p>
                    <b>Fr. Jose Ch.</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrVijay} alt="FrSimon" />
                  <p>
                    <b>Fr. Ch. Vijaykumar</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrSundar} alt="FrSimon" />
                  <p>
                    <b>Fr. P. Sundar Rao</b>
                  </p>
                </div>
                <div className="principle">
                  <img src={FrShyju} alt="FrSimon" />
                  <p>
                    <b>Fr. Shyju Chacko</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="founder-about-founder">
              <div className="founder">
                <h2>
                  <u>
                    <b>OUR TEACHING STAFF</b>
                  </u>
                </h2>
                <img
                  src={finalstaff } 
                  style={{
                    height: "400px",
                    width: "100%",
                  }}
                  alt="School pic"
                />
              </div>
              <div className="about-founder">
                <h2>
                  <u>
                    <b>Founding a Legacy: SFS English Medium School, Tanuku</b>
                  </u>
                </h2>

                <p>
                  <b>
                    {" "}
                    In 1983, SFS English medium school,Tanuku was started from
                    class VI. It was a felt need to have an English medium
                    school in the area. For many years Tanuku was the practical
                    field for the post-novices for their missionary initiation.
                    For one year a few students, of the minor seminary, were
                    kept at Tanuku before starting the Nidadavole minor
                    seminary. Fr. George Chirayil was the first Principal and
                    Fr.Mathew Chavelil was the first correspondent of the
                    school. Rev.Fr.Antony Mooenthottam was the provincial at the
                    time of the establishment of the school. Initially the
                    school building was situated within the campus of the
                    present parish church. later it was shifted to the present
                    sight at NGO’S colony about 750 metres away from the church
                    campus. In 2012 SFS Nursery School was started at Ajram
                    during the tenure of Fr.Jose Cheriyantharayil. SFS School at
                    Tanuku became full pledged and now its strength is 837
                    students with 33 teaching staff and 10 non-teaching staff.
                  </b>
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </main>

      {/* Your footer content */}
    </div>
  );
}

export default HomePage;
