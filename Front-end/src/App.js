import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./Components/Main_popup/Calendar/Calendar";
import Contents from "./Components/Main/Contents/Contents";
import PopupPassword from "./Components/Main/Popup/Password/PopupPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Contents />} />
          <Route exact path="/Contents" element={<Contents />} /> {/* 추가됨 */}
          <Route exact path="/password" element={<PopupPassword />} />
          <Route exact path="/Calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
