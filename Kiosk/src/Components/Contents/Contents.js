import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Contents.css"; // 콘텐츠 css
import Header from "../Contents/Header/Header"; // 헤더 영역
import PopupPassword from "../Contents/Popup/Password/PopupPassword"; // 비밀번호 입력 팝업

function Contents() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [showPopup, setShowPopup] = useState(queryParams.get("showPopup") === "true");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [stampDay, setStampDay] = useState(1); // 첫 출석 일 경우 기본값 1

    // 로그인 상태 및 출석 일차 확인 (페이지 렌더 시 실행할 것들 구현한 코드)
    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedInStatus);

        const storedStampDay = localStorage.getItem("stampDay");
        if (storedStampDay) {
            setStampDay(parseInt(storedStampDay, 10));
        }
    }, []);

    // "입장하기" 버튼 클릭 시 비밀번호 팝업 띄우기
    const handleOpenPopup = () => {
        setShowPopup(true);
        navigate("?showPopup=true");
    };

    // 팝업 닫기 (로그인 처리)
    const handleClosePopup = () => {
        setShowPopup(false);
        navigate("/");  // 쿼리스트링을 없애고 바로 /contents로 이동

        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");

        let nextStampDay = 1;
        if (localStorage.getItem("stampDay")) {
            nextStampDay = parseInt(localStorage.getItem("stampDay"), 10) + 1;
        }

        setStampDay(nextStampDay);
        localStorage.setItem("stampDay", nextStampDay.toString());

        window.location.reload();
    };

    // 로그아웃 기능
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("stampDay");
        navigate("/contents");
    };

    // 이용신청 기능
    const handleGoToUseApplication = () => {
        navigate("/GoToUseApplication");
    }

    return (
        <div className="container">
            <Header />
            <div className="bottom-section">
                <div className="highlight-section">
                    <div className="left">
                        <span className="emoji">🤩</span>
                        <div className="text">
                            <div className="highlight">
                                {isLoggedIn ? "로그아웃 하시겠어요?" : "잠깐!!! 입장하기 누르셨어요?"}
                            </div>
                            <div>
                                {isLoggedIn
                                    ? `???님 출석 완료 되었습니다! (${stampDay}일차)`
                                    : "오늘 첫 '별 스탬프'를 기다려요!"}
                            </div>
                        </div>
                    </div>
                    {isLoggedIn ? (
                        <button className="button" onClick={handleLogout}>
                            <span>🚪</span> 로그아웃
                        </button>
                    ) : (
                        <button className="button" onClick={handleOpenPopup}>
                            <span>⭐</span> 입장하기
                        </button>
                    )}
                </div>

                <div className="top-buttons">
                    <div className="button-group">
                        <div className="group-title" style={{color: '#6a11cb'}}>시설 이용 신청</div>
                        <div className="middle-buttons">
                            <div className="middle-button" onClick={handleGoToUseApplication}
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
                        <div className="group-title" style={{color: '#009efd'}}>교육 및 프로그램 출석</div>
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
                {showPopup && <PopupPassword onOpen={() => {}} onClose={handleClosePopup} />}
            </div>
        </div>
    );
}

export default Contents;