import React from "react";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import ProductionList from "./Components/ProductionList/ProductionList";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductionList/>
      <Contact/>
    </div>
  );
}

export default App;
