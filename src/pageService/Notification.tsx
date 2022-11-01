import React from "react";

const Notification = () => {
    return(
        <>
        <div className="noti">
            <div style={{display: 'flex', alignItems: 'center'}}>알림속성</div>
            <div className="notiContent">
                <button>푸시 알림</button>
                <button>앱 내 알림</button>
            </div>
        </div>
        <div className="title">
            <div>제목</div>
            <div>
                <input type={"text"}></input>
            </div>          
        </div>
        <div className="subTitle">
            <div>소제목</div>
            <div>
                <input type={"text"}></input>
            </div>
        </div>
        </>
    )
}
export default Notification;