import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 350px;
    margin: 40px auto;
    padding: 32px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    `;

    const Title = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
    `;

    const Label = styled.label`
    display: block;
    font-size: 18px;
    margin: 16px 0 8px;
    `;

    const Input = styled.input`
    width: 96%;
    // margin: 12px,0px
    padding: 8px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 8px;
    `;

    const Select = styled.select`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    `;

    const CheckboxGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    `;

    const CheckboxLabel = styled.label`
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    `;

    const RadioGroup = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    `;

    const RadioLabel = styled.label`
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    `;

    const Button = styled.button`
    width: 100%;
    margin-top: 32px;
    padding: 14px;
    font-size: 18px;
    background-color: #F2D1D1; /* 핑크 (F2D1D1) */
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #F1B3B3
}


`;
interface FormData {
    name: string;
    ageRange: string;
    skinConcerns: string[];
    sensitivity: string;
    uvExposure: string;
}

interface UserInfoFormProps {
    onClose: () => void; // 모달을 닫는 함수 prop
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        ageRange: "",
        skinConcerns: [],
        sensitivity: "",
        uvExposure: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            skinConcerns: checked
                ? [...prev.skinConcerns, value]
                : prev.skinConcerns.filter(concern => concern !== value),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // 서버로 formData 전송하거나 다른 작업을 수행할 수 있음

        // "다음" 버튼 클릭 시 모달 닫기
        onClose();
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Title>피부 정보 입력</Title>

                <Label>이름</Label>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <Label>나이대</Label>
                <Select name="ageRange" value={formData.ageRange} onChange={handleChange} required>
                    <option value="">선택하세요</option>
                    <option value="10대">10대</option>
                    <option value="20대">20대</option>
                    <option value="30대">30대</option>
                    <option value="40대">40대</option>
                    <option value="50대 이상">50대 이상</option>
                </Select>

                <Label>피부 고민</Label>
                <CheckboxGroup>
                    {["모공", "여드름", "미백", "주름"].map((concern) => (
                        <CheckboxLabel key={concern}>
                            <input
                                type="checkbox"
                                value={concern}
                                checked={formData.skinConcerns.includes(concern)}
                                onChange={handleCheckboxChange}
                            />
                            {concern}
                        </CheckboxLabel>
                    ))}
                </CheckboxGroup>

                <Label>민감도</Label>
                <RadioGroup>
                    {["민감", "보통", "튼튼"].map((level) => (
                        <RadioLabel key={level}>
                            <input
                                type="radio"
                                name="sensitivity"
                                value={level}
                                checked={formData.sensitivity === level}
                                onChange={handleChange}
                                required
                            />
                            {level}
                        </RadioLabel>
                    ))}
                </RadioGroup>

                <Label>자외선 노출 정도</Label>
                <RadioGroup>
                    {["상", "중", "하"].map((level) => (
                        <RadioLabel key={level}>
                            <input
                                type="radio"
                                name="uvExposure"
                                value={level}
                                checked={formData.uvExposure === level}
                                onChange={handleChange}
                                required
                            />
                            {level}
                        </RadioLabel>
                    ))}
                </RadioGroup>

                <Button type="submit">다음</Button>
            </form>
        </Container>
    );
};

export default UserInfoForm;