import React, { useState } from "react";
import { setConstantValue } from "typescript";
import Notification from "../pageService/Notification";
import Point from "../pageService/Point";
import menuIcon from '../assets/menuIcon.png';
import Inquiry from "../pageService/Inquiry";

const Service = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    
    return (
        <>
            <div>
                <h2>
                    <img src={menuIcon} style={{ width: "30px", display: "inline" }} />
                    유저서비스
                </h2>
            </div>
            <div className="container">
                <div className="menu">
                    <button onClick={() => setSelectedMenu(0)}>
                        <span className={selectedMenu == 0 ? 'selectedMenu' : ''}>
                            알림보내기
                        </span>
                    </button>
                    <button onClick={() => setSelectedMenu(1)}>
                        <span className={selectedMenu == 1 ? 'selectedMenu' : ''}>
                            포인트 임의 적립
                        </span>
                    </button>
                    <button onClick={() => setSelectedMenu(2)}>
                        <span className={selectedMenu == 2 ? 'selectedMenu' : ''}>
                            입금 신청 리스트
                        </span>
                    </button>
                    <button onClick={() => setSelectedMenu(3)}>
                        <span className={selectedMenu == 3 ? 'selectedMenu' : ''}>
                            1:1 문의
                        </span>
                    </button>
                    <button onClick={() => setSelectedMenu(4)}>
                        <span className={selectedMenu == 4 ? 'selectedMenu' : ''}>
                            유저 성공요청 임의 수락
                        </span>
                    </button>
                </div>
                {/* <div className="content"> */}
                    {selectedMenu==0 ? <Notification /> : 
                    selectedMenu==1 ?<Point /> :
                    selectedMenu==3? <Inquiry/> : null}
                {/* </div> */}
            </div>
        </>
    )
}
export default Service;