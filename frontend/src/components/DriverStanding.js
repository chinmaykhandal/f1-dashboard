import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { useEffect } from "react";

const BarChart = () => {
  const [driverStandings, setDriverStandings] = useState([]);
  const [year, setYear] = useState(2023);

  const labels = driverStandings
    .slice(0, 20)
    .map((standing) => standing.driver.familyName);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Driver Standings",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: driverStandings.slice(0, 20).map((standing) => standing.points),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Top 20 Driver Standings",
      },
    },
  };

  const option = [
    { value: "2010", label: "2010" },
    { value: "2011", label: "2011" },
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  const getData = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/driverStandings",
        data: { year: year },
      });
      setDriverStandings(response.data.standings);
    } catch (error) {
      console.log(error);
    }
  };

  const changeYear = (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  useEffect(() => {
    getData();
  }, [year]);
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2vh" }}
    >
      {" "}
      <div
        className="year-select"
        style={{ display: "flex", alignItems: "center" }}
      >
        <label htmlFor="year" style={{ marginRight: "10px" }}>
          Year
        </label>
        <select id="year" onChange={changeYear} value={year} style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}>
          {option.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div
        className="chart-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          width: "100vw",
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
