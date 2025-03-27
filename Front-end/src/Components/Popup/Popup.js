import React from "react";
import "./Popup.css"; // 팝업 스타일

function Popup({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>비밀번호 인증 완료</h2>
                <p>인증이 성공적으로 완료되었습니다.</p>
                
                <button className="close-btn" onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    );
}

export default Popup;