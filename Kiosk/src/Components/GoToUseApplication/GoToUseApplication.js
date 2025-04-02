import React from "react";
import Header from "./Header";
import Contents from "./Contents";
import "./GoToUseApplication.css";

function GoToUseApplication() {
    return (
        <div className="GoToUseApplication">
            <Header />
            <div className="scrollable-content">
                <Contents />
            </div>
        </div>
    );
}

export default GoToUseApplication;
