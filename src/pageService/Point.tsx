import React, { useState } from "react";

const Point = () => {
    const [notiType, setNotiType] = useState(0);

    return(
        <>
        <div className="content">
            <div className="point_email gridLR">
                <div style={{display: 'flex', alignItems: 'center'}}>유저이메일</div>
                <div className="pointRightAlign">
                    <div style={{width: '50%'}}>
                        <input type={"text"} style={{width:'100%'}}></input>
                        <div>존재하는 아이디 맞심더</div>
                    </div>
                    <button>확인</button>
                    
                </div> 
            </div>
            <div className="point_title gridLR">
                <div>제목</div>
                <div>
                    <input type={"text"} style={{width: '50%'}}></input>
                </div>          
            </div>
            <div className="point_subTitle gridLR">
                <div>소제목</div>
                <div>
                    <input type={"text"} style={{width: '50%'}}></input>
                </div>
            </div>
            <div className="point_point gridLR">
                <div>적립 포인트</div>
                <div>
                    <input type={"text"} style={{width: '50%'}}></input>
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
export default Point;