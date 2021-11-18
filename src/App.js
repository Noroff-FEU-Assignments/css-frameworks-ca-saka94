import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/style.scss";
import Navigation from "./components/Navigation";
import Imagecarousel from "./components/Imagecarousel";

function App() {
  return (
    <>
      <Navigation />
      <Imagecarousel />
    </>
  );
}

export default App;
