import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./Header.css";

function Header() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  //https://disease.sh/v3/covid-19/states/{states}

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

    console.log("**** Country code is working ****", countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="header">
      <div className="appHeader">
        <h1>Covid Tracker</h1>

        <FormControl className="appDropdown">
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
    </div>
  );
}

export default Header;
