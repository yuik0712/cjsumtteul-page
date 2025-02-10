import React, { useState, useEffect } from "react";
import CalendarPopup from "../Calendar/CalendarPopup";
import "./PopupPassword.css";

const PasswordPopup = ({ onOpen, onClose }) => {
    const [input, setInput] = useState("");
    const [step, setStep] = useState("password");

    useEffect(() => {
        if (onOpen) {
            onOpen();
        }
    }, [onOpen]);

    // 비밀번호가 올바른지 자동으로 확인
    useEffect(() => {
        if (input === "01234") {
            setStep("calendar");
            setInput("");
        }
    }, [input]);

    const handleKeyClick = (num) => {
        setInput((prev) => prev + num);
    };

    const handleBackspace = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleReset = () => {
        setInput("");
    };

    const handleCalendarClose = () => {
        onClose();
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