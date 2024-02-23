import React from "react";
import "./HomePage.css";
// import sfsSchool from "./assests/sfsSchool.JPG";
import staffpic from "./assests/staff.jpg";
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

function HomePage() {
  return (
    <div>
      <Swiper />
      <main className="main-content">
        <div className="content">
          <div className="HomeSection1">
            <div className="vision-mission">
              <div className="vision">
                <h2>
                  <u>
                    <b>OUR VISION</b>
                  </u>
                </h2>

                <p>
                  <b>
                    A holistic society of compassionately human, spiritually
                    enlightened, intellectually awakened, professionally
                    skilled, socially committed and culturally integrated
                    persons, based on the values as lived and taught by Jesus
                    Christ and followed by Saint Francis de Sales. We equip the
                    younger generation with necessary life-skills to become:
                    Catalysts of Social Transformation, Votaries of National
                    Integration & Ambassadors of Universal Brotherhood. We
                    foster a caring and humane society meant to promote the
                    marginalized.
                  </b>
                </p>
              </div>
              <div className="mission">
                <h2>
                  <u>
                    <b>OUR MISSION</b>
                  </u>
                </h2>
                <p>
                  <b>
                    To provide a conductive atmosphere for intellectual
                    development. To facilitate conviction-based spiritual
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
              </div>
            </div>
            <div className="patron-about-patron">
              <div className="patron">
                <h2>
                  <u>
                    <b>OUR PATRON</b>
                  </u>
                </h2>
                <img
                  src={patron}
                  style={{
                    height: "350px",
                    width: "80%",
                  }}
                  alt="school pic"
                />
              </div>
              <div className="about-patron">
                <h2>
                  <u>
                    <b>ABOUT OUR PATRON</b>
                  </u>
                </h2>
                <h4>
                  The Short History of St. Francis de Sales (S.F.S)-(1567 -
                  1622)
                </h4>
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
            </div>

            <div className="founder-about-founder">
              <div className="founder">
                <h2>
                  <u>
                    <b>OUR FOUNDER</b>
                  </u>
                </h2>
                <img
                  src={FounderImage}
                  style={{
                    height: "350px",
                    width: "80%",
                  }}
                  alt="Founder pic"
                />
              </div>
              <div className="about-founder">
                <h2>
                  <u>
                    <b>ABOUT OUR FOUNDER</b>
                  </u>
                </h2>
                <h4>
                  Venerable FR. PETER MERMIER - The founder of M.S.F.S.
                  Congregation
                </h4>
                <p>
                  <b>
                    Born on 28th August 1790 at Chaumount, Savoy, France of
                    peasant family. <br />
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
                    Founded the Religious Congregation of the Daughters of the
                    Cross at Chavanod in 1841. <br />
                    Died: 30-9-1862, Declared Venerable by the Church in 1989.
                  </b>{" "}
                </p>
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
                  src={staffpic}
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

            <div className="our-principles">
              <h1 className="section-heading" style={{fontSize: "3rem"}}>OUR PRINCIPALS</h1>
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
          </div>
        </div>
      </main>

      {/* Your footer content */}
    </div>
  );
}

export default HomePage;
