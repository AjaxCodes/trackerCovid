import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    half_op: "rgba(125, 215,29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypesColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
          Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    ></Circle>
  ));
