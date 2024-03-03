// SFSFoundation.js
import React from "react";
import "./AlumniFoundation.css";
import AluminiSwiper from "./AluminiSwiper";

function SFSFoundation() {
  return (
    <>
      <h2 style={{marginTop: "30px", fontSize: "2rem", fontWeight: "bold"}} className="sfs-foundation-title">
        <u >SFS Foundation</u>
      </h2>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className="foundation">
      <p >
            Together, we are SFS Tanuku. Our story, woven by countless
            individual journeys, is just beginning. Join us, reminisce, and
            contribute to this ever-growing tapestry of excellence.
          </p>
      </div>
      <AluminiSwiper />
      <div className="sfs-foundation-container">
        <div className="sfs-foundation-content">
          
          <div className="sfs-foundation-awards">
            <h3 style={{ marginTop: "30px" }}>
              <u>SFS Alumni Foundation Awards: Honoring Our Teachers</u>
            </h3>
            <p className="sfs-foundation-awards-description">
              The SFS Alumni 92 Batch proudly introduces the SFS Alumni
              Foundation Awards, a testament to our enduring gratitude and
              respect for our educators. These awards recognize teachers who
              have shown exceptional skill and dedication in their fields. Each
              year, six teacher awards will be presented, each accompanied by a
              cash prize and a certificate, celebrating the outstanding
              contributions of our teaching staff. All Awards will have a CASH
              Prize + Certificate. Each Award will have a 1500 Rs Cash Prize, a
              certificate and a winners cup. The Rolling Shield will need to be
              returned to the school after one day of being in the winners home.
              All Awards are being sponsored by the 1992 Batch. These awards
              symbolize our commitment to excellence and our appreciation for
              the teachers who have shaped the lives of countless students at
              SFS Tanuku. Here are the awards:
              <ul>
                <li>
                  <b> Fr.Mani Award for exemplary outgoing student</b>: The Best
                  Outgoing student does not always need to be the School Leader.
                  It can be someone who is more popular and strong in extra
                  curricular. Eligibility: 10th Class Student. Criteria: Any
                  Student who wins several prizes in annual day celebrations/
                  has won laurels for the school at state level or national
                  level in any competition. For ex, a student who has won the
                  National Talent Scholarship (NTS)., etc., Funded by Ramakanth
                  K. Forever.
                </li>
                <br />
                <li>
                  <b>
                    {" "}
                    The Ramalingeswara Rao Award for best Telugu Padyam Recital
                  </b>
                  : Every Year, the School shall conduct Telugu Padyam recital
                  competitions for annual day. The winner shall receive the Sri
                  Ramalingeswara Rao Award for telugu excellence. Eligibility:
                  7-10th Classes. Criteria: Any student who wins “The
                  Ramalingeswara Rao” Telugu Padya Recital Competition. Funded
                  by Gannavarapu Rajesh.
                </li>
                <br />

                <li>
                  <b>The Kennedy Award for Sports Excellence</b>: This Award
                  shall be given to the student who has attained excellence by
                  winning in State Level/District level competition Eligibility:
                  7-10th Classes. Criteria: Any student who has participated and
                  won in district/state level sports competitions. Funded by
                  Pawan Forever.
                </li>
                <br />
                <li>
                  <b>The Caramel Award for Girl Excellence</b>:This Award shall
                  be given to the girl student who has attained excellence in
                  sports in district/national level in any kind of sport.
                  Eligibility: 7-10th Classes. Criteria: Any girl student who
                  has participated and won in district level sports or has
                  talent which needs to be encouraged. This Award shall be
                  funded by Parvathi Forever
                </li>
                <br />
                <li>
                  <b>The Anthony Award for Excellence & Prowess in English</b>:
                  This Award shall be given to the student who has attained
                  excellence by winning in State Level/District level
                  competition in English Debate/Essay Writing/Intl.Competitions.
                  Eligibility: 8th-10th Classes. Criteria: Any student who has
                  participated and won in district/state level sports
                  competitions which demand prowess and grip over English
                  Language. This Award shall be funded by Subrahmanyam
                  permanently
                </li>
                <br />
                <li>
                  <b>The Satyavathi Award for Excellence & Prowess in Hindi</b>:
                  This Award shall be given to the student who has attained
                  excellence in passing highest level in Hindi exams conducted
                  by Dakshina Bharatha Hindi Prachar Sabha Eligibility: 8th-10th
                  Classes. Criteria: Any student who has completed
                  Praveshika/Rashtrabasha Visharad or Rashtrabasha Praveena. In
                  2019, at age of 12, a girl from guntur completed this exam. We
                  are looking forward to such talent being encouraged in the
                  school. This Award shall be funded by VMV Lakshmi permanently
                </li>
                <br />
                <li>
                  <b>The Haragopal Desu- IntelliIndia Quiz Competition </b>:
                  Every Year in August, Intelli India will be conducting a quiz
                  competition on current affairs & general knowledge. The
                  competition is open for classes 7-10. Written exam shall be
                  conducted. IntelliIndia will send in the exam sheet and the
                  school will send in the papers to us. We will announce school
                  level winner. Prize will be given on Aug.15 or on Annual Day.
                  IntelliIndia will send the question papers . This program
                  shall be funded by Uma Desu.
                </li>
                <br />
                <li>
                  <b>The Chakka Suryanarayana Girl Excellence Award</b>: .
                  Eligibility: 7-10th Classes. Criteria: Any Girl who has
                  displayed exceptional talent in interschool competitions and
                  brought laurels to the school. This Award shall be funded by
                  Ushakanthi forever
                </li>
                <br />
                <li>
                  <b>
                    Gannavarapu Satyanarayana Award for Classical/Light Music
                    (Vocal){" "}
                  </b>
                  : This Award shall be given every year to a high school
                  student who demonstrates excellence in vocal classical music.
                  Eligibility: 7-10th Classes. Criteria: Any Student who has won
                  awards at state level in Classical Music. This Award shall be
                  funded by Gannavarapu Rajesh permanently.{" "}
                </li>
                <br />
              </ul>
            </p>
          </div>
          <div className="sfs-foundation-details">
            <h3>
              <u>Foundation Details</u>
            </h3>
            <p className="sfs-foundation-details-description">
              The Foundation Bank Account details will be shared soon. The
              Foundation will have a Jt.Account with the School with the cheque
              signing power vesting with the Joint Signature of Principal of the
              School and the President of the Association. Upon getting the
              necessary clearances, we shall post the details as well as the
              projects we will be taking up in the coming years. We invite
              Alumni from other members to join the association and participate
              actively for the overall benefit of our Alma Mater.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SFSFoundation;
