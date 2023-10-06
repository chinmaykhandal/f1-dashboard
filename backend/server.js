const csv = require("csvtojson");
const fs = require("fs");
var ErgastClient = require("ergast-client");
var ergast = new ErgastClient();
var express = require("express");
var app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});

app.post("/driverStandings", function (req, res) {
  ergast.getDriverStandings(req.body.year, function (err, driverStandings) {
    if (!err) {
      res.json(driverStandings);
    }
  });
});

app.post("/constructorStandings", function (req, res) {
  ergast.getDriverStandings(
    req.body.year,
    function (err, constructorStandings) {
      if (!err) {
        res.json(constructorStandings);
      }
    }
  );
});

app.post("/raceOverview", function (req, res) {
  ergast.getRace(req.body.year, req.body.round, function (err, race) {
    if (!err) {
      res.json(race);
    }
  });
});


app.post("/season", function (req, res) {
    ergast.getSeason(req.body.year, function (err, season) {
      if (!err) {
        res.json(season);
      }
    });
  });
