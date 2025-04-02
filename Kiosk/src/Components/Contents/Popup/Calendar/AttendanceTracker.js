import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./AttendanceTracker.css";

const AttendanceTracker = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [stampDay, setStampDay] = useState(1);
  const navigate = useNavigate();

  // 기본 출석 데이터는 useMemo로 메모이제이션
  const defaultAttendanceData = useMemo(() => [
    { day: "일", points: 3, checked: false },
    { day: "월", points: 3, checked: false },
    { day: "화", points: 3, checked: false },
    { day: "수", points: 3, checked: false },
    { day: "목", points: 3, checked: false, bonus: 50 },
    { day: "금", points: 3, checked: false },
    { day: "토", points: 3, checked: false, bonus: 100 },
  ], []); // 빈 배열을 의존성으로 사용하여 첫 렌더링 시 한 번만 계산되도록 함

  // 출석 데이터 상태
  const [attendanceData, setAttendanceData] = useState(defaultAttendanceData);

  // useEffect로 초기 데이터 설정
  useEffect(() => {
    const firstVisit = !localStorage.getItem("attendanceData");

    if (firstVisit) {
      localStorage.setItem("attendanceData", JSON.stringify(defaultAttendanceData));
      localStorage.setItem("stampDay", "1");
      localStorage.setItem("isLoggedIn", "false");
    }

    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsChecked(loggedInStatus);

    const storedStampDay = localStorage.getItem("stampDay");
    if (storedStampDay) {
      setStampDay(parseInt(storedStampDay, 10));
    }
  }, [defaultAttendanceData]);

  // 로그인 처리 함수
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); // 로그인 상태를 로컬스토리지에 저장
    navigate("/contents"); // 쿼리스트링 없이 /contents로 리다이렉션
  };

  const handleCheckAttendance = () => {
    const todayIndex = new Date().getDay();

    // 이미 출석한 날짜에는 중복 출석을 막기 위한 예외 처리
    if (attendanceData[todayIndex].checked) {
      alert("오늘은 이미 출석하셨습니다! 리워드가 없습니다.");
      handleLogin(); // 출석 후 바로 리다이렉션
      return;
    }

    // 출석일 갱신
    const updatedAttendance = attendanceData.map((item, index) =>
        index === todayIndex ? { ...item, checked: true } : item
    );

    setAttendanceData(updatedAttendance);
    localStorage.setItem("attendanceData", JSON.stringify(updatedAttendance));

    // stampDay 업데이트 (다음 날로 이동)
    const nextStampDay = stampDay + 1;
    localStorage.setItem("stampDay", nextStampDay.toString());
    setStampDay(nextStampDay); // stampDay 상태를 업데이트

    // 리워드 포인트와 누적 점수 업데이트
    const points = updatedAttendance[todayIndex].points;
    const bonus = updatedAttendance[todayIndex].bonus || 0;
    const totalPoints = points + bonus;

    alert(`출석 완료! 오늘의 리워드: ${totalPoints}P`);

    // 출석 체크 완료 후 isChecked를 true로 변경하여 "닫기" 버튼이 나오게 한다.
    setIsChecked(true);

    handleLogin(); // 출석 후 바로 리다이렉션
  };

  const handleClose = () => {
    setIsVisible(false);
    handleLogin();
    if (onClose) {
      onClose();
    }
  };

  const today = new Date();
  // 현재 요일을 정확하게 가져오기 위해 한국어 요일 배열 사용
  const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];
  const dayIndex = today.getDay();
  const todayString = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 (${koreanDays[dayIndex]})`;

  // 뒤로 가기 버튼을 눌렀을 때 팝업을 닫고, 해당 페이지로 리디렉션
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      // 뒤로가기에서 리디렉션
      navigate("/contents"); // 원하는 페이지로 리디렉션
    };

    // 뒤로 가기 이벤트를 처리
    window.history.pushState(null, "", window.location.href); // 브라우저의 history 상태를 변경하여 뒤로가기가 되지 않도록 만듬
    window.onpopstate = () => {
      navigate("/contents"); // 뒤로가기 버튼이 눌리면 /contents로 리디렉션
    };

    return () => {
      window.onpopstate = null; // 컴포넌트가 unmount 될 때 이벤트 리스너 해제
    };
  }, [navigate]);

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
        </div>

        <button className="attendance-button" onClick={isChecked ? handleClose : handleCheckAttendance}>
          {isChecked ? "닫기" : "오늘 출석하고 3P 받기"}
        </button>
      </div>
  );
};

export default AttendanceTracker;
