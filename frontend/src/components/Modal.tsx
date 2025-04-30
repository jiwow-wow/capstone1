import React from "react";
import styled from "styled-components";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);  // 배경 색상 + 투명도
    backdrop-filter: blur(5px);  // 배경 흐림 효과
    z-index: 999;
`;

const ModalContent = styled.div`
    // width: 350px;
    // margin: 100px auto;
    // padding: 32px;
    // background: #ffffff;
    // border-radius: 16px;
    // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    z-index: 1000;  // 모달 내용이 배경 위에 나타나도록
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;  // 모달이 열리지 않으면 렌더링하지 않음

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {/* 자식 컴포넌트 (UserInfoForm) 렌더링 */}
                {children}
            </ModalContent>
        </Overlay>
    );
};

export default Modal;
