import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./AttendanceTracker.css";

const AttendanceTracker = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(false); // 출석 체크 여부
  const [isVisible, setIsVisible] = useState(true); // UI 표시 여부
  const navigate = useNavigate();

  // 인증 처리 후, 쿼리스트링에 인증 상태를 포함시켜 Contents 페이지로 이동
  const handleLogin = () => {
    navigate("/contents?isAuthenticated=true");
  };

  // 출석 체크 처리
  const handleCheckAttendance = () => {
    setIsChecked(true);
  };

  // 닫기 버튼 클릭 시 UI 숨기기 및 로그인 처리
  const handleClose = () => {
    setIsVisible(false);
    handleLogin();
    if (onClose) {
      onClose();
    }
  };

  // 시스템 날짜 가져오기
  const today = new Date();
  const dayIndex = today.getDay(); // 0(일) ~ 6(토)
  const todayString = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 (${["일", "월", "화", "수", "목", "금", "토"][dayIndex]})`;

  // 출석 데이터
  const attendanceData = [
    { day: "일", points: 3, checked: true },
    { day: "월", points: 3, checked: true },
    { day: "화", points: 3, checked: true },
    { day: "수", points: 3, checked: true },
    { day: "목", points: 3, checked: true, bonus: 50 },
    { day: "금", points: 3, checked: true },
    { day: "토", points: 3, checked: true, bonus: 100, double: true },
  ];

  if (!isVisible) return null; // UI 숨기기

  return (
    <div className="attendance-container">
      {/* 출석 현황 */}
      <div className="attendance-header">
        <div className="attendance-calendar">
          <p>{todayString}</p> {/* 오늘 날짜 표시 */}
          <h1>{attendanceData.filter((item) => item.checked).length + (isChecked ? 1 : 0)}일 출석</h1>
          <span className="total-points">
            누적 {attendanceData.reduce((sum, item) => sum + (item.checked ? item.points + (item.bonus || 0) : 0), 0) + (isChecked ? 3 : 0)}P
          </span>
        </div>
      </div>

      {/* 요일별 출석 체크 */}
      <div className="attendance-days">
        {attendanceData.map(({ day, points, checked, bonus, double }, index) => (
          <div key={index} className="attendance-day">
            <span className="day-label">{day}</span>
            <div className={checked ? "checked-circle" : "unchecked-circle"}>
              {checked && (double ? <span className="double">x2</span> : "✔")}
            </div>
            {checked && <span className="points">+{points}P</span>}
            {checked && bonus && <span className="bonus-points">+{bonus}P</span>}
          </div>
        ))}

        {/* 오늘 날짜 출석 상태 */}
        <div className="attendance-day">
          <span className="day-label">{["일", "월", "화", "수", "목", "금", "토"][dayIndex]}</span>
          <div className={isChecked ? "checked-circle" : "unchecked-circle"}>
            {isChecked && "✔"}
          </div>
          {isChecked && <span className="points">+3P</span>}
        </div>
      </div>

      {/* 출석 버튼 → 닫기 버튼으로 변경 */}
      <button className="attendance-button" onClick={isChecked ? handleClose : handleCheckAttendance}>
        {isChecked ? "닫기" : "오늘 출석하고 3P 받기"}
      </button>
    </div>
  );
};

export default AttendanceTracker;
