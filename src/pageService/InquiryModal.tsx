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
    const [inputDisabled, setInputDisabled] = useState(true);
    const [newAnswer, setNewAnswer] = useState('');
    const inputChange = (e:any) => {
        setNewAnswer(e.target.value);
    }
    const saveNewAnser = () => {
        console.log('전송');
        //새로 입력한 답변 서버로 전송
    }
    const dummy=[
        {
            num:1,
            username: '아크',
            title: '문의제목1',
            content: '내용이에용내용요용',
            time: '2022-08-21 12:34:56.0',
            answer: '', //api에서 받아오는 답변해둔값
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
                        <input type="text" onChange={inputChange} disabled={inputDisabled} value={newAnswer} />
                    </div>
                    <div style={{'textAlign': 'center'}}>
                        <button onClick={close}>닫기</button>
                        {dummy[0].answer === '' ? 
                            <button className='inputDone' onClick={() => {
                                if (!inputDisabled){
                                    saveNewAnser();
                                }
                                setInputDisabled(!inputDisabled);
                            }}>{inputDisabled ? '작성' : '작성 완료'}</button>
                            : <button className='inputDone' onClick={() => {
                                if (!inputDisabled){
                                    saveNewAnser();
                                }
                                setInputDisabled(!inputDisabled);
                            }}>{inputDisabled ? '수정' : '수정 완료'}</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default InquiryModal;
