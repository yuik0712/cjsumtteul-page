import React, { useState } from "react";
import "./Calendar.css"; // 스타일 추가

function Calendar({ onClose }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const renderCalendarDates = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();

    const dates = [];

    // 빈 날짜(이전 달)
    for (let i = 0; i < startDayOfWeek; i++) {
      dates.push(<div key={`empty-${i}`} className="date empty"></div>);
    }

    // 현재 달의 날짜
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(
        <div key={`day-${i}`} className="date">
          {i}
        </div>
      );
    }

    return dates;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="calendar-container">
      {/* 헤더 */}
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>이전</button>
        <h2 className="current-month">
          {currentYear}년 {currentMonth + 1}월
        </h2>
        <button onClick={handleNextMonth}>다음</button>
      </div>

      {/* 요일 */}
      <div className="calendar-days">
        <div className="day">일</div>
        <div className="day">월</div>
        <div className="day">화</div>
        <div className="day">수</div>
        <div className="day">목</div>
        <div className="day">금</div>
        <div className="day">토</div>
      </div>

      {/* 날짜 */}
      <div className="calendar-dates">{renderCalendarDates()}</div>

      {/* 닫기 버튼 */}
      <div className="calendar-footer">
        <button onClick={"/"} className="close-button">닫기</button>
      </div>
    </div>
  );
}

export default Calendar;
