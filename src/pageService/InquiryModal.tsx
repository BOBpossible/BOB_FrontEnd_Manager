import { useRef, useState } from "react";

interface Modal{
    modalOpen: boolean,
    setModalOpen: (modalOpen: boolean) => void,
    serialNum: number,
}
const InquiryModal = ({modalOpen, setModalOpen, serialNum}: Modal) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const editMode = useState(false);
    const close = () => {
        setModalOpen(false);
    }

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
    ]
    return (
        <div className="overlay" ref={modalRef}>
            <div className="modalContent">
                <div className="modalContentWrap">
                    <div className="gridLR">
                        <div>유저명</div>
                        <div>{dummy[0].username}</div>
                    </div>
                    <div className="gridLR">
                        <div>제목</div>
                        <div>{dummy[0].title}</div>
                    </div>
                    <div className="gridLR">
                        <div>내용</div>
                        <div>{dummy[0].content}</div>
                    </div>
                    <div className="gridLR">
                        <div>답변 내용</div>
                        {dummy[0].answer==='' ?
                        <input type="text" />
                        : <div>{dummy[0].answer}</div>}
                    </div>
                    <button onClick={close}>닫기</button>
                </div>
            </div>
        </div>
    );
}


export default InquiryModal;
