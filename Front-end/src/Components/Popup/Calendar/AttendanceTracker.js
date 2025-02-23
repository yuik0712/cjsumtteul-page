import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AttendanceTracker.css";

const AttendanceTracker = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [stampDay, setStampDay] = useState(1);
  const navigate = useNavigate();

  // 기본 출석 데이터
  const defaultAttendanceData = [
    { day: "일", points: 3, checked: false },
    { day: "월", points: 3, checked: false },
    { day: "화", points: 3, checked: false },
    { day: "수", points: 3, checked: false },
    { day: "목", points: 3, checked: false, bonus: 50 },
    { day: "금", points: 3, checked: false },
    { day: "토", points: 3, checked: false, bonus: 100, double: true },
  ];

  // 출석 데이터 상태
  const [attendanceData, setAttendanceData] = useState(defaultAttendanceData);

  // useEffect로 초기 데이터 설정
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsChecked(loggedInStatus);

    const storedStampDay = localStorage.getItem("stampDay");
    if (storedStampDay) {
      setStampDay(parseInt(storedStampDay, 10));
    }

    // localStorage에서 출석 데이터 불러오기 (없으면 기본값 사용)
    const storedAttendance = localStorage.getItem("attendanceData");
    if (storedAttendance) {
      try {
        setAttendanceData(JSON.parse(storedAttendance));
      } catch (error) {
        console.error("출석 데이터 파싱 오류:", error);
        setAttendanceData(defaultAttendanceData); // 파싱 실패 시 기본값 설정
      }
    } else {
      // 데이터가 없으면 기본값을 저장
      localStorage.setItem("attendanceData", JSON.stringify(defaultAttendanceData));
    }
  }, []);

  const handleLogin = () => {
    navigate("/contents?isAuthenticated=true");
  };

  const handleCheckAttendance = () => {
    setIsChecked(true);

    const todayIndex = new Date().getDay();
    const updatedAttendance = attendanceData.map((item, index) =>
      index === todayIndex ? { ...item, checked: true } : item
    );

    setAttendanceData(updatedAttendance);
    localStorage.setItem("attendanceData", JSON.stringify(updatedAttendance));
  };

  const handleClose = () => {
    setIsVisible(false);
    handleLogin();
    if (onClose) {
      onClose();
    }
  };

  const today = new Date();
  const dayIndex = today.getDay();
  const todayString = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 (${["일", "월", "화", "수", "목", "금", "토"][dayIndex]})`;

  if (!isVisible) return null;

  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <div className="attendance-calendar">
          <p>{todayString}</p>
          <h1>{(attendanceData || []).filter((item) => item.checked).length + (isChecked ? 1 : 0)}일 출석</h1>
          <span className="total-points">
            누적 {(attendanceData || []).reduce((sum, item) => sum + (item.checked ? item.points + (item.bonus || 0) : 0), 0) + (isChecked ? 3 : 0)}P
          </span>
        </div>
      </div>

      <div className="attendance-days">
        {(attendanceData || []).map(({ day, points, checked, bonus, double }, index) => (
          <div key={index} className="attendance-day">
            <span className="day-label">{day}</span>
            <div className={checked ? "checked-circle" : "unchecked-circle"}>
              {checked && (double ? <span className="double">x2</span> : "✔")}
            </div>
            {checked && <span className="points">+{points}P</span>}
            {checked && bonus && <span className="bonus-points">+{bonus}P</span>}
          </div>
        ))}

        <div className="attendance-day">
          <span className="day-label">{["일", "월", "화", "수", "목", "금", "토"][dayIndex]}</span>
          <div className={isChecked ? "checked-circle" : "unchecked-circle"}>
            {isChecked && "✔"}
          </div>
          {isChecked && <span className="points">+3P</span>}
        </div>
      </div>

      <button className="attendance-button" onClick={isChecked ? handleClose : handleCheckAttendance}>
        {isChecked ? "닫기" : "오늘 출석하고 3P 받기"}
      </button>
    </div>
  );
};

export default AttendanceTracker;
