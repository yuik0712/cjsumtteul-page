import React from 'react';
import './GoToUseApplication.css';

function GoToUseApplication() {
  return (
    <div className="top-info">
      <div className="left-section">
        <div className="left-top">
          <button className="back-button" onClick={() => window.history.back()}>←</button>
          <p>23 초 후에 메인 화면으로 이동합니다.</p>
        </div>
        <div className="left-title">
          <div className="title">공간을</div>
          <div className="subtitle">선택하세요</div>
        </div>
      </div>
      <div className="right-section">
        <div className="date-day">2024-06-24 (월)</div>
        <div className="date-time">11:42:38</div>
      </div>
    </div>
  );
}

export default GoToUseApplication;