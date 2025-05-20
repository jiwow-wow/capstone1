import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import AnalysisResult from '../components/AnalysisResult';
import './StepTwo.css';

interface AnalysisResultType {
  pores: number;
  elasticity: number;
  moisture: number;
  pigmentation: number;
}

const Result: React.FC = () => {
  const [result, setResult] = useState<AnalysisResultType | null>(null);
  const navigate = useNavigate(); // 추가

  useEffect(() => {
    const stored = localStorage.getItem('analysisResult');
    if (stored) {
      setResult(JSON.parse(stored));
    } else {
      setResult({
        pores: 472,
        elasticity: 0.5,
        moisture: 0.84,
        pigmentation: 146,
      });
    }
  }, []);

  const handleNextClick = () => {
    navigate('/stepthree'); // 이동
  };

  if (!result) return <div>분석 결과를 불러오는 중입니다...</div>;

  return (
    <div className="StepTwoContainer">
      <h2>피부 결과 분석</h2>
      <AnalysisResult
        graphData={{
          '수분': result.moisture,
          '탄력': result.elasticity,
          '색소침착 개수': result.pigmentation,
          '모공 개수': result.pores,
        }}
      />
      <button className="next-button" onClick={handleNextClick}>
        나에게 맞는 화장품 추천받기
      </button>
    </div>
  );
};

export default Result;
