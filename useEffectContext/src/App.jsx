import { useState, useEffect } from "react";

// CSS
import "./App.css";

// Libaries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import LandingPage from "./routes/LandingPage";
import LearnMorePage from "./routes/LearnMore/LearnMorePage";
import NewsPage from "./routes/NewsPage";
import Home from "./routes/Home";
import Start from "./routes/Start";

// Context
import { DarkModeProvider } from "./component/CreateContext/CreateContext";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/LearnMorePage" element={<LearnMorePage />} />
            <Route path="/NewsPage" element={<NewsPage />} />
            <Route path="Start" element={<Start />} />
          </Route>
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
