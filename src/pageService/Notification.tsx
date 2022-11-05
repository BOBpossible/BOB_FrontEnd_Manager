import React, { useState } from "react";

const Notification = () => {
    const [notiType, setNotiType] = useState(0);

    return(
        <>
        <div className="content">
            <div className="noti gridLR">
                <div style={{display: 'flex', alignItems: 'center'}}>알림속성</div>
                <div className="notiContent">
                    <button onClick={() => setNotiType(0)} className={notiType? '': 'selectedNoti'}>
                        푸시 알림
                    </button>
                    <button onClick={() => setNotiType(1)} className={notiType? 'selectedNoti': ''}>
                        앱 내 알림
                    </button>
                </div>
            </div>
            <div className="title gridLR">
                <div>제목</div>
                <div>
                    <input type={"text"} style={{width: '50%'}}></input>
                </div>          
            </div>
            <div className="subTitle gridLR">
                <div>소제목</div>
                <div>
                    <input type={"text"} style={{width: '50%', height: '90%'}}></input>
                </div>
            </div>
        </div>
        <div className="doneDiv">
            <button className="doneBtn">
                확인
            </button>
        </div>
        </>
    )
}
export default Notification;