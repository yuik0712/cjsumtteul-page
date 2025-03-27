import React, { useState, useEffect } from "react";
import CalendarPopup from "../Calendar/AttendanceTracker";
import "./PopupPassword.css";

const PasswordPopup = ({ onOpen, onClose }) => {
    const [input, setInput] = useState("");
    const [step, setStep] = useState("password");

    // 팝업이 열리면 onOpen을 호출
    useEffect(() => {
        if (onOpen) {
            onOpen();
        }
    }, [onOpen]);

    // 비밀번호가 맞으면 캘린더로 이동
    useEffect(() => {
        if (input === "01234") {
            setStep("calendar");
            setInput(""); // 비밀번호 입력 초기화
        }
    }, [input]);

    // 숫자 키를 클릭했을 때
    const handleKeyClick = (num) => {
        setInput((prev) => prev + num);
    };

    // 백스페이스
    const handleBackspace = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    // 리셋
    const handleReset = () => {
        setInput("");
    };

    // 캘린더 팝업 닫기
    const handleCalendarClose = () => {
        setStep("password"); // 캘린더를 닫고 다시 비밀번호 화면으로 돌아감
        if (onClose) {
            onClose(); // 부모 컴포넌트에서 팝업 닫기
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                {step === "password" ? (
                    <div className="keyboard-container">
                        <div className="display">
                            {input.split("").map((char, index) => (
                                <div key={index} className="black-key">
                                    {char}
                                </div>
                            ))}
                        </div>
                        {/* 숫자 키패드 */}
                        <div className="key" onClick={() => handleKeyClick("1")}>1</div>
                        <div className="key" onClick={() => handleKeyClick("2")}>2</div>
                        <div className="key" onClick={() => handleKeyClick("3")}>3</div>
                        <div className="action-key" onClick={handleReset}>↻</div>

                        <div className="key" onClick={() => handleKeyClick("4")}>4</div>
                        <div className="key" onClick={() => handleKeyClick("5")}>5</div>
                        <div className="key" onClick={() => handleKeyClick("6")}>6</div>
                        <div className="action-key" onClick={handleBackspace}>⌫</div>

                        <div className="key" onClick={() => handleKeyClick("7")}>7</div>
                        <div className="key" onClick={() => handleKeyClick("8")}>8</div>
                        <div className="key" onClick={() => handleKeyClick("9")}>9</div>
                        <div></div>

                        <div></div>
                        <div className="key" onClick={() => handleKeyClick("0")}>0</div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <CalendarPopup onClose={handleCalendarClose} />
                )}
            </div>
        </div>
    );
};

export default PasswordPopup;
