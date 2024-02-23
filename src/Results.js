import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Results.css";

function Results() {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [statsData, setStatsData] = useState({});
  const [toppersData, setToppersData] = useState({});
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true when fetching data starts

        const allStudentsResponse = await axios.get(
          `https://9qlddpyuxf.execute-api.ap-south-1.amazonaws.com/get_results_marks_of_year?year=${selectedYear}`
        );
        const statsResponse = await axios.get(
          `https://se3ur7o3b6.execute-api.ap-south-1.amazonaws.com/get_stats_in_year?year=${selectedYear}`
        );
        const toppersResponse = await axios.get(
          `https://vtwmiuycb8.execute-api.ap-south-1.amazonaws.com/get_toppers_of_year?year=${selectedYear}`
        );

        setStatsData(statsResponse.data);
        setToppersData(toppersResponse.data);
        setStudentsData(allStudentsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is completed
      }
    };

    fetchData();
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="results-container">
      <h1 className="results-heading" style={{ textAlign: "center" }}>
        <u>RESULTS</u>
      </h1>
      <div className="year-container">
        <label htmlFor="year-dropdown">
          <h2>Year:&nbsp;&nbsp;</h2>
        </label>
        <select
          id="year-dropdown"
          className="year-dropdown"
          onChange={handleYearChange}
        >
          <option value="2023">2022-2023</option>
          <option value="2022">2021-2022</option>
          <option value="2021">2020-2021</option>
        </select>
      </div>

      {/* Loader conditionally rendered based on the 'loading' state */}
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="records-section">
            <h2 className="section-heading">
              <u>Our Records</u>
            </h2>
            <div className="record-cards-container">
              <div className="record-card">
                <h3>{statsData.data?.passPercentage || "N/A"}</h3>
                <p>Pass Percentage</p>
              </div>
              <div className="record-card">
                <h3>{statsData.data?.gt570 || "N/A"}</h3>
                <p>Students scored &gt; 570</p>
              </div>
              <div className="record-card">
                <h3>{statsData.data?.gt550 || "N/A"}</h3>
                <p>Students scored &gt; 550</p>
              </div>
              <div className="record-card">
                <h3>{statsData.data?.gt500 || "N/A"}</h3>
                <p>Students scored &gt; 500</p>
              </div>
            </div>
          </div>

          <div className="toppers-section">
            <h2 className="section-heading">
              <u>TOPPERS</u>
            </h2>
            <div className="toppers-table">
              <div className="table-header">
                <div className="table-column">Serial No.</div>
                <div className="table-column">Student Name</div>
                <div className="table-column">Total</div>
              </div>
              {toppersData.data &&
                Array.isArray(toppersData.data) &&
                toppersData.data.map((topper, index) => (
                  <div key={index} className="table-row">
                    <div className="table-column">{index + 1}</div>
                    <div className="table-column">{topper.Name}</div>
                    <div className="table-column">{topper.Total}</div>
                  </div>
                ))}
            </div>
          </div>

          {/* <div className="students-marks-section">
            <h2 className="section-heading">
              <u>Students Marks</u>
            </h2>
            <table className="students-marks-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total Marks (600)</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(studentsData.data) &&
                  studentsData.data.map((student, index) => (
                    <tr key={index}>
                      <td>{student.Name}</td>
                      <td>{student.Total}</td>
                      <td>{Math.round(student.Total / 6, 5)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div> */}
        </>
      )}
    </div>
  );
}

export default Results;
