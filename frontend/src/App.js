import { useState } from "react";
import DriverStanding from "./components/DriverStanding";
import ConstructorStanding from "./components/ConstructorStanding";
import RaceOverview from "./components/RaceOverview";
import SeasonOverview from "./components/SeasonOverview";


export default function App() {
  const [feature, setFeature] = useState("driver");
  return (
    <div className="App">
      <center>
        <h2>F1 Drivers Dashboard</h2>
        {/* Buttons for navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {/* <button
            onClick={() => setFeature("season")}
            style={{
              backgroundColor: feature === "season" ? "#007BFF" : "#ccc",
              color: feature === "season" ? "#fff" : "#000",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Season Overview
          </button>
          <button
            onClick={() => setFeature("race")}
            style={{
              backgroundColor: feature === "race" ? "#007BFF" : "#ccc",
              color: feature === "race" ? "#fff" : "#000",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Race Overview
          </button> */}
          <button
            onClick={() => setFeature("driver")}
            style={{
              backgroundColor: feature === "driver" ? "#007BFF" : "#ccc",
              color: feature === "driver" ? "#fff" : "#000",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Driver Standing
          </button>
          <button
            onClick={() => setFeature("constructor")}
            style={{
              backgroundColor: feature === "constructor" ? "#007BFF" : "#ccc",
              color: feature === "constructor" ? "#fff" : "#000",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Constructor Standing
          </button>
        </div>

        {/* Conditional rendering based on the feature state */}
        {feature === "driver" && <DriverStanding />}
        {feature === "constructor" && <ConstructorStanding />}
        {feature === "season" && <SeasonOverview />}
        {feature === "race" && <RaceOverview />}
      </center>
    </div>
  );
}
