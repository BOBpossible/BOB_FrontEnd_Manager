import React, { useCallback, useRef, useState } from "react";
import InquiryModal from "./InquiryModal";

const Inquiry = () => {
    const [notiType, setNotiType] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const [selectedInquiry, setSelectedInquiry] = useState(0);

    const dummy=[
        {
            num:1,
            username: '아크',
            title: '문의제목1',
            content: '내용이에용내용요용',
            time: '2022-08-21 12:34:56.0',
            answer: '',
            serialNumber: 0,
        },
        {
            num:2,
            username: '아크크',
            title: '문의제목2',
            content: '내용222222',
            time: '2022-12-34 12:34:56.0',
            answer: '답완',
            serialNumber: 1,
        },
    ]
    console.log('modalOpen', modalOpen);
    return(
        <>
        {/* <div className="contentInquiry" onClick={(e)=> {
            if (modalOpen === true){
                console.log(e.target)
                console.log(modalRef.current);
                if (modalRef.current !== e.target) {
                    console.log('dd', e.target);
                    setModalOpen(false)
                }
            }
        }}> */}
        <div className="contentInquiry">
            <div className="inquiryHeader inquiryGrid">
                <div className="inquiryNum">
                    번호
                </div>
                <div className="inquiryName">
                    유저명
                </div>
                <div className="inquiryTitle">
                    문의 제목
                </div>
                <div className="inquiryTime">
                    문의 올린 시간
                </div>
                <div className="inquiryAnswer">
                    답변 유무
                </div>
            </div>
            <div className="inquiryList">
                {dummy.map((e) => {return(
                    <div className="inquiryGrid inquiryEach" onClick={() => {
                        setModalOpen(true);
                        setSelectedInquiry(e.serialNumber);
                    }} key={e.serialNumber}>
                        <div className="inquiryNum">
                            {e.num}
                        </div>
                        <div className="inquiryName">
                            {e.username}
                        </div>
                        <div className="inquiryTitle">
                            {e.title}
                        </div>
                        <div className="inquiryTime">
                            {e.time}
                        </div>
                        <div className="inquiryAnswer">
                            {e.answer === '' ? '네모' :'체크네모'}
                        </div>
                    </div>
                )})}
            </div>
            {modalOpen && <InquiryModal modalOpen={modalOpen} setModalOpen={setModalOpen} serialNum={selectedInquiry} />}
            <div className="inquriyPageNum">
                1 - ---
            </div>
        </div>
        </>
    )
}
export default Inquiry;