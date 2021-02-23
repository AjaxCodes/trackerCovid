import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./Header.css";

function Header() {
  const [countries, setCountries] = useState(["USA", "UK", "France"]);


  //https://disease.sh/v3/covid-19/countries
  //https://disease.sh/v3/covid-19/states/{states}


  useEffect(() => {
      



  }, [countries]);
  return (
    <div className="header">
      <div className="appHeader">
        <h1>Covid Tracker</h1>

        <FormControl className="appDropdown">
          <Select varient="outlined" vlaue="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Header;
