import React from "react";
import React, { useState } from "react";

function Toggle() {
// Set up the initia state
const [isOn, setIsOn] = useState(false);

// Call the setter function to update state
function handleClick{
  setIsOn((isOn) => !isOn)
}

const color = isOn ? "red" : "white";

// Use the state variable in the component
  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
