import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Contents.css";
import Header from "../Header/Header";
import PopupPassword from "../Popup/Password/PopupPassword"; // 비밀번호 입력 팝업

function Contents() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [showPopup, setShowPopup] = useState(queryParams.get("showPopup") === "true");

    // "입장하기" 버튼 클릭 시 비밀번호 팝업 띄우기
    const handleOpenPopup = () => {
        setShowPopup(true); // Update showPopup state to true
        navigate("?showPopup=true"); // Update URL query parameter
    };

    // 팝업 닫기 (쿼리스트링 제거)
    const handleClosePopup = () => {
        setShowPopup(false); // Update showPopup state to false
        navigate(""); // Remove URL query parameter
    };

    const handleNavigate = () => {
        navigate("/password");
    };

    return (
        <div className="container">
            <Header />
            <div className="bottom-section">
                <div className="highlight-section">
                    <div className="left">
                        <span className="emoji">🤩</span>
                        <div className="text">
                            <div className="highlight">잠깐!!! 입장하기 누르셨어요?</div>
                            <div>오늘 첫 "별스탬프"를 기다려요!</div>
                        </div>
                    </div>
                    <button className="button" onClick={handleOpenPopup}>
                        <span>⭐</span> 입장하기
                    </button>
                </div>

                <div className="top-buttons">
                    <div className="button-group">
                        <div className="group-title">시설 이용 신청</div>
                        <div className="middle-buttons">
                            <div className="middle-button"
                                style={{
                                    background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
                                    color: '#fff',
                                }}>
                                <span>✨</span>
                                <div>이용신청</div>
                            </div>
                            <div className="middle-button"
                                style={{
                                    background: 'linear-gradient(135deg, #e52d27, #b31217)',
                                    color: '#fff',
                                }}>
                                <span>🏃</span>
                                <div>취소·중도퇴실</div>
                            </div>
                        </div>
                    </div>
                    <div className="button-group">
                        <div className="group-title">교육 출석</div>
                        <div className="middle-buttons">
                            <div className="middle-button"
                                style={{
                                    background: 'linear-gradient(135deg, #009efd, #2af598)',
                                    color: '#fff',
                                }}>
                                <span>✋</span>
                                <div>출석체크</div>
                            </div>
                        </div>
                    </div>
                    <div className="button-group">
                        <div className="group-title" style={{ color: '#ff7f50' }}>물품 대여</div>
                        <div className="middle-buttons">
                            <div className="middle-button"
                                style={{
                                    background: 'linear-gradient(135deg, #ff7f50, #ffbc47)',
                                    color: '#fff',
                                }}>
                                <span>🎲</span>
                                <div>대여신청</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-buttons">
                    <div className="button-group">
                        <div className="half-buttons-section">
                            <div className="half-button left">
                                <div className="button-content">
                                    <span>⏳ 이용현황 조회</span>
                                </div>
                            </div>
                            <div className="half-button right">
                                <div className="button-content">
                                    <span>🔍 회원번호 찾기</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="contact-info">
                        <div>이용문의: 043-853-2021</div>
                        <div>대표문의: sumtteul@daum.net</div>
                    </div>
                    <div className="hours">
                        <div>월~금: 09:00 ~ 20:00</div>
                        <div>토요일: 10:00 ~ 18:00</div>
                        <div>일요일: 10:00 ~ 15:00</div>
                    </div>
                </div>

                <div className="playpass">청소년문화의집 숨&뜰</div>

                {/* showPopup=true일 경우 팝업 띄우기 */}
                {showPopup && <PopupPassword onClose={handleClosePopup} />}
                </div>
        </div>
    );
}

export default Contents;
