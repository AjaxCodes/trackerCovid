import React from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <h1>Covid Tracker</h1>

      <FormControl className="appDropdown">
        <Select varient="outlined" vlaue="abc">
          <MenuItem value="worldwide">worldwide 1</MenuItem>
          <MenuItem value="worldwide">worldwide 2</MenuItem>
          <MenuItem value="worldwide">worldwide 3</MenuItem>
          <MenuItem value="worldwide">worldwide 4</MenuItem>
        </Select>
      </FormControl>

      {/* Header */}
      {/* Title Select input drop down*/}
      {/* */}

      {/* info box*/}
      {/* info box */}
      {/* info box */}

      {/* map */}
      {/* graph table */}
    </div>
  );
}

export default App;
