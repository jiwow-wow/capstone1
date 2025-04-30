import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [name, setName] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleLogin = async () => {
        try {
        const response = await axios.post('http://localhost:5000/users/login', {
            name,
        });
        console.log('login success', response.data);
        } catch (error) {
        console.log('login failed', error);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
        const res = await axios.post('http://localhost:5000/analyze', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log('분석 결과:', res.data);
        } catch (err) {
        console.error('전송 실패:', err);
        }
    };

    return (
        <>
        <input
            type="text"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleSubmit}>분석 요청</button>
        </>
    );
};

export default Login;
