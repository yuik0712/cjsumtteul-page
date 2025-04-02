import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contents from "./Components/Contents/Contents";
import PopupPassword from "./Components/Contents/Popup/Password/PopupPassword";
import GoToUseApplication from "./Components/GoToUseApplication/GoToUseApplication";

function App() {
  return (
    <div className="App">
      {/* BrowserRouter로 라우터 지정(어떤 항목이나 탭을 사용자가 클릭했을때 다음으로 넘어가는 페이지) */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Contents />} /> {/* Path를 통해 매칭 (url 예시 => localhost:3000/Contents) */}
          <Route exact path="/Contents" element={<Contents />} /> {/* 추가됨 */}
          <Route exact path="/password" element={<PopupPassword />} />
          <Route exact path="/GoToUseApplication" element={<GoToUseApplication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
