import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Password.css";

function Password() {
    const [input, setInput] = useState(""); // 입력값 상태 관리
    const navigate = useNavigate(); // useNavigate 훅 사용

    // 키 입력 핸들러
    const handleKeyClick = (key) => {
        if (input.length < 5) { // 현재 입력값의 길이가 5미만인 경우
            const newInput = input + key; // 새 문자열 생성
            setInput(newInput); // 상태 업데이트

            // 조건부 이동
            if (newInput === "01234") {
                navigate("/Calendar"); // Calendar 페이지로 이동
                setTimeout(() => {
                    navigate("/Contents?showPopup=true"); // 일정 시간 후 Contents로 이동 (팝업 활성화)
                }, 2000); // 2초 후 리다이렉트
            }
        }
    };

    // 리셋 버튼 핸들러
    const handleReset = () => {
        setInput("");
    };

    // 백스페이스 버튼 핸들러
    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    return (
        <div className="keyboard-container">
            {/* Display */}
            <div className="display">
                {input.split("").map((char, index) => (
                    <div key={index} className="black-key">
                        {char}
                    </div>
                ))}
            </div>

            {/* Keypad */}
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
    );
}

export default Password;
