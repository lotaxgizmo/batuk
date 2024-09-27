import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Hero = lazy(() => import("./components/Hero"));
const Bunch = lazy(() => import("./components/Bunch"));
// const Header = lazy(() => import("./components/Header"));
// const Room = lazy(() => import("./components/Room"));
// const Batuk = lazy(() => import("./components/Batuk"));
// const Whome = lazy(() => import("./components/Whome"));
// const Smokesection = lazy(() => import("./components/Smokesection"));
// const Faq = lazy(() => import("./components/Faq"));
// const Tokenomics = lazy(() => import("./components/Tokenomics"));
// const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Bunch />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
