import { useRef } from "react";

interface Modal{
    modalOpen: boolean,
    setModalOpen: (modalOpen: boolean) => void,
    serialNum: number,
}
const InquiryModal = ({modalOpen, setModalOpen, serialNum}: Modal) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const close = () => {
        setModalOpen(false);
    }
    return (
        <div className="overlay" ref={modalRef}>
            <div className="modalContent">
                <button onClick={close}>
                    X
                </button>
                <p ref={modalRef}>{serialNum}번 모달창입니다.</p>
            </div>
        </div>
    );
}


export default InquiryModal;
