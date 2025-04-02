import React from "react";
import "./Contents.css";
import Header from "./Header";

function Contents() {
    return (
        <div className="Container">
            {/* 사이드바 영역 */}
            <div className="sidebar">
                <div className="sidebar-4floor-item">
                    <button>4층</button>
                </div>
                <div className="sidebar-3floor-item">
                    <button>3층</button>
                </div>
                <div className="sidebar-2floor-item">
                    <button>2층</button>
                </div>
                <div className="sidebar-1floor-item">
                    <button>1층</button>
                </div>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="main-content">
                <div className="contents">
                    {/* 4층 다목적 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            다목적 공간
                        </div>
                        <div className="space-row">
                            <div className="space">다목적 강당</div>
                        </div>
                    </div>
                    {/* 3층 댄스 연습 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            댄스 연습 공간
                        </div>
                        <div className="space-row">
                            <div className="space">댄스 연습실 1실</div>
                            <div className="space">댄스 연습실 2실</div>
                        </div>
                    </div>
                    {/* 3층 악기 연습 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            악기 연습 공간
                        </div>
                        <div className="space-row">
                            <div className="space">악기 연습실 1실</div>
                            <div className="space">악기 연습실 2실</div>
                        </div>
                    </div>
                    {/* 3층 노래 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            노래 공간
                        </div>
                        <div className="space-row">
                            <div className="space">노래방 1실</div>
                            <div className="space">노래방 2실</div>
                        </div>
                    </div>
                    {/* 3층 레저 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            레저 공간
                        </div>
                        <div className="space-row">
                            <div className="space">포켓볼 1실</div>
                            <div className="space">포켓볼 2실</div>
                        </div>
                    </div>
                    {/* 2층 활동 공간 & 풀스공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            활동 공간 & 풀스공간
                        </div>
                        <div className="space-row">
                            <div className="space">활동지원 1실(풀스공간)</div>
                            <div className="space">활동지원 2실</div>
                        </div>
                    </div>
                    {/* 2층 사무 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            사무공간
                        </div>
                        <div className="space-row">
                            <div className="space">사무실</div>
                        </div>
                    </div>
                    {/* 2층 영상 제작 & 편집 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            영상 제작 & 편집 공간
                        </div>
                        <div className="space-row">
                            <div className="space">영상제작실</div>
                            <div className="space">영상편집실</div>
                        </div>
                    </div>
                    {/* 1층 야외 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            야외 공간
                        </div>
                        <div className="space-row">
                            <div className="space">미니공연장</div>
                            <div className="space">휴식공간</div>
                        </div>
                    </div>
                    {/* 1층 놀이 공간 */}
                    <div className="content dance-space">
                        <div className="content-title" style={{ fontFamily: 'yg-jalnan' }}>
                            놀이공간
                        </div>
                        <div className="space-row">
                            <div className="space">놀이공간</div>
                            <div className="space">보드게임 공간</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contents;
