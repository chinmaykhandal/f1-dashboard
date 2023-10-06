import React, {useState, useEffect} from 'react'
import axios from 'axios';


const RaceOverview = () => {
    const [year, setYear] = useState(2023);
    const [raceData, setRaceData] = useState([]);
    const [rounds, setRounds] = useState("23");


  const optionYear = [
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
  const optionRounds = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" }
  ];
  const changeYear = (e) => {
    setYear(e.target.value);
    console.log(year);
    getRounds()
  };

  const getRounds = async() => {
    const response = await axios({
        method: "post",
        url: "http://localhost:5000/season",
        data: { year: year},
      });
    
    console.log(response.data.races.length);
    setRounds(response.data.races.length)
    
  }

  const getData = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/raceOverview",
        data: JSON.stringify({ year: year, round: rounds }),
      });
      console.log(response);
      setRaceData(response.data.standings);
    } catch (error) {
      console.log(error);
    }
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
          {optionYear.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
          
        </select>
        <label htmlFor="year" style={{ marginRight: "10px" }}>
          Round
        </label>
        <select id="year" onChange={changeYear} value={year} style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}>
          {optionRounds.slice(0, rounds).map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
          
        </select>
      </div>
    </div>
  )
}

export default RaceOverview
