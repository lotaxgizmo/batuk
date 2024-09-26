import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Bunch from "./components/Bunch";
// import Header from "./components/Header";
// import Room from "./components/Room";
// import Batuk from "./components/Batuk";
// import Whome from "./components/Whome";
// import Smokesection from "./components/Smokesection";
// import Faq from "./components/Faq";
// import Tokenomics from "./components/Tokenomics";
// import Footer from "./components/Footer"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Bunch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
