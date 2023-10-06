import React, {useState, useEffect} from 'react'
import axios from 'axios';


const SeasonOverview = () => {
    const [year, setYear] = useState(2023);
    const [seasonData, setSeasonData] = useState([]);



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

  const changeYear = (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  const getData = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/seasonOverview",
        data: { year: year},
      });
      console.log(response);
      setSeasonData(response.data.standings);
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
          {option.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SeasonOverview
