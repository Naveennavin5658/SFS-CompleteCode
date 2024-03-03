// Alumni.js

import React from "react";
import "./Alumni.css";
// import AlumniForm from "./AlumniForm";
import Typewriter from "typewriter-effect";
const Alumni = () => {
  return (
    <div className="alumni-container">
      <div className="alumni-header">
        <h1>
            SFS Tanuku Alumni Association 
        </h1>
        <h3 style={{marginTop: "-3px"}}>Weaving a Legacy of Shared <Typewriter 
            options={{
              strings: ["Experiences!", "Moments!", "Memories!"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          /></h3>
      </div>

      <div className="alumni-section">
        <h2>
          <u>A Journey Beyond the Classroom</u>
        </h2>
        <p>
          The walls of SFS Tanuku echo with the laughter and footsteps of
          generations, each leaving a unique mark on our school's rich history.
          As alumni, we carry the spirit of SFS Tanuku into the world, weaving a
          legacy not just of academic achievement, but of shared values,
          experiences, and lifelong connections.
        </p>
        {/* Include other mission content here */}
      </div>

      <div className="alumni-section">
        <h2>
          <u>Who We Are: Architects of Memories and Dreams</u>
        </h2>
        <p>
          We are more than just faces in yearbook photos; we are the architects
          of memories and dreams. Our bond transcends time and distance, united
          by the foundational values instilled in these very classrooms. Whether
          we graduated decades ago or just last year, the SFS spirit burns
          bright, illuminating our diverse paths in life.{" "}
        </p>
        {/* Include other content */}
      </div>

     

      
      <div className="alumni-section">
        <h2>
          <u>Our Mission and Activities</u>
        </h2>
        <p>
          SFS Alumni Association was formed in 2017. It has launched the SFS
          Alumni Foundation in 2023 and awarded the first Foundation Awards. It
          will be launching soon more activities. Our mission extends beyond
          nostalgia; it's about igniting potential, forging connections, and
          building a vibrant community. Our activities include:
        </p>
        <ul>
          <li>
            <b>Annual Alumni Meet</b>: A grand reunion filled with memories and
            renewed connections. It happens on the 14th of November every year.
          </li>
          <br />
          <li>
            <b>Foundation Awards</b>: The Foundation awards have been started by
            the 1992 outgoing batch. Details are available on the Foundation
            Page.
          </li>
          <br />
          <li>
            <b>Mentorship Programs</b>: Offering career advice and support to
            current students, paving the way for their success.
          </li>
          <br />
          <li>
            <b>Speaker Series and Workshops</b>: These shall be a regular
            feature henceforth. It will feature alumni achievements and provide
            career insights across various industries.
          </li>
          <br />
          <li>
            <b>Volunteer Initiatives</b>: Contributing to the school's
            development and community service projects.
          </li>
          <br />
          <li>
            <b>Social and Cultural Events</b>: Fostering camaraderie through
            sponsorship of gatherings, sporting events, and cultural
            celebrations.
          </li>
        </ul>
      </div>

      <div className="alumni-section">
        <h2>
          <u>SFS Alumni Association Members</u>
        </h2>
        <p>
          SFS Alumni Association has the following <b>Lifetime members</b> who
          are also founding members of the foundation:
        </p>
        <ul>
          <li><b>Uma Desu</b></li>
          <br />
          <li><b>G.Rajesh</b></li>
          <br />
          <li><b>P.Parvathi</b></li>
          <br />
          <li><b>C.UshaKanthi</b></li>
          <br />
          <li><b>Ch.Bhaskar</b></li>
          <br />
          <li><b>VMV Lakshmi</b></li>
          <br />
          <li><b>Pawan</b></li>
          <br />
          <li><b>K.Ramakanth</b></li>
          <br />
          <li><b>M.Subrahmanyam</b></li>
          <br />
        </ul>
        <p>
          The Executive Body is elected once every five years. In our last
          meeting, we selected the following body members:
        </p>
        <ul>
          <li>
            <b>President</b>: N.V.R. Rajesh. Proprietor, Ratnam Showroom,
            Tanuku.
          </li>
          <br />
          <li>
            <b>Vice President</b>: Chakka Bhaskar. Proprietor, Vasavi Metals,
            Tanuku.
          </li>
          <br />
          <li>
            <b>Advisory Guest</b>: Uma Desu.CEO, IntelliIndia && Gannavarapu
            Rajesh, Infosys.
          </li>
          <br />
          <li>Other Body members details will be updated soon.</li>
          <br />
        </ul>
      </div>


      <div className="alumni-section">
        <h2>Support and Contact</h2>
        <p>
          You can get the latest updates of school on our instagram handle at
          the above and subscribe to the youtube channel for regular updates
          <br />
          For queries or suggestions regarding the SFS Alumni Association, you
          can reach out to: <b>sfsalumni@gmail.com</b>
          <br />
          If any of the alumni wishes to enhance this website you can contact :{" "}
          <b>naveennavin5659@gmail.com</b>
        </p>
      </div>
    </div>
  );
};

export default Alumni;
