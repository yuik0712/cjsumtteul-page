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
    <time datetime="2014-09-20" class="icon">
        <em>Saturday</em>
        <strong>September</strong>
        <span>20</span>
      </time>
  );
}

export default Calendar;
