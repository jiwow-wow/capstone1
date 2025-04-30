import React, { useEffect, useState } from 'react';
import styles from './Mainpage.module.css';
import styled from 'styled-components';

import Modal from "../../components/Modal";  
import UserInfoForm from '../Userform/UserInfoForm';  // Correct the import to UserInfoForm
import ImageSend from "../../components/ImageSend/ImageSend"

const Title = styled.h1`
    font-size: 70px;
    color: rgba(59, 55, 55, 0.97);
    margin-bottom: 120px;
`;
const ModalButton = styled.button`
    font-size:20px;
    font-weight: bold;  // Set font weight to bold
    // text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(0, 0, 0, 0.3);
    margin: 0px 0px 20px 0px
`
const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px
    margin-top: 200px;
`
const H1= styled.h1`
    font-size: 24px;
    color: #507886; /* 하늘색 (89A8B2) */
    text-align: center;
    margin-bottom: 24px;
}
`

const Mainpage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);  // Open modal
    const closeModal = () => setIsModalOpen(false); // Close modal

    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch("http://localhost:5000") // NestJS server address
            .then((res) => res.text())
            .then((data) => {
                setMessage(data);
            })
            .catch((err) => {
                console.log("Error occurred:", err);
            });
    }, []);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal(); // Close modal on ESC key press
            }
        };
        window.addEventListener('keydown', handleEscKey);

        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };
    }, []);


    return (
        <div className={styles.container}>
            <Title>피부에 맞는 화장품 추천 AI</Title>

            <ItemBox>
                <H1>1. 피부 정보 설문</H1>
                <ModalButton onClick={openModal}>설문 시작</ModalButton>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <UserInfoForm onClose={closeModal} /> {/* Pass the onClose prop here */}
                </Modal>

                <H1>2. 얼굴 사진 업로드</H1>
                    <ImageSend/>                
                <H1>3. 결과 보기</H1>
                <H1>4. 추천 화장품 보기</H1>
            </ItemBox>

        </div>
    );
};

export default Mainpage;
