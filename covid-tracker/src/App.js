import React, { useState, useEffect } from "react";
import "./App.css";
import Statsbox from "./Components/Statsbox";
import Map from "./Components/Map";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { Card, CardContent, Typography } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  //https://disease.sh/v3/covid-19/states/{states} api call to do states

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    //console.log("**** Country code is working ****", countryCode);
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        // all of the data
        //from the country response
        setCountryInfo(data);
      });
  };
  console.log("**** country info ****", countryInfo);
  return (
    <div className="app">
      <div className="appLeft">
        <div className="appHeader">
          <h1>Covid Tracker</h1>

          <FormControl className="headerDropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="appStats">
          <Statsbox
            title="Coronavirus cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <Statsbox
            title="Recoverd "
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <Statsbox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <div className="appMap">
          <Map />
        </div>
      </div>
      <div>
        <Card className="appRight">
          <CardContent>
            <h3>Cases By Country</h3>
            <h3>New Cases Worldwide</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
