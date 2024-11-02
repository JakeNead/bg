import { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);

  return <Button variant="contained">Hello Spruce</Button>;
}

export default App;
