import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contents from "./Components/Contents/Contents";
import PopupPassword from "./Components/Popup/Password/PopupPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Contents />} />
          <Route exact path="/Contents" element={<Contents />} /> {/* 추가됨 */}
          <Route exact path="/password" element={<PopupPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
