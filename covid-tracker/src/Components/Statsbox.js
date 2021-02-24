import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function Statsbox({ title, cases, total }) {
  return (
    <Card>
      <CardContent>
        <Typography Classname="boxTitle" color="textSecondary">
          {" "}
          {title}{" "}
        </Typography>
        <h2 Classname="boxCases"> {cases}</h2>
        <Typography Classname="boxTotal" color="textSecondary">
          {" "}
          {total} Total{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Statsbox;
