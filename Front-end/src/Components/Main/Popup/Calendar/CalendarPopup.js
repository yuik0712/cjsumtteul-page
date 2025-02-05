import React, { useState } from "react";
import "./CalendarPopup.css"; 

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
      https://file+.vscode-resource.vscode-cdn.net/Users/jigdongdaejang/Documents/GitHub/cjsumtteul-page/Front-end/Screenshot%202025-02-01%20at%2010.05.57%E2%80%AFAM.png?version%3D1738660000751
      이거 그대로 구현해야 함
    </div>
  );
}

export default Calendar;
