// src/components/RightPanel.tsx
import React from 'react';
import './RightPanel.css';

import LogoText from "./LogoText"

interface RightPanelProps {
  name: string;
  setName: (name: string) => void;
  skinConcerns: string[];
  handleConcernChange: (concern: string) => void;
  gender: string | null;
  setGender: (gender: string) => void;
  handleStartAnalysis: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  name,
  setName,
  skinConcerns,
  handleConcernChange,
  gender,
  setGender,
  handleStartAnalysis,
}) => {
  return (
    <div className="right-panel">
        <LogoText/>

      <label
        className='biglabel'
        htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        placeholder="이름을 입력하세요"
        className="small-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label
        className='biglabel'
      >피부 고민 (최대 3개 선택)</label>
      <div className="checkbox-group">
        {['트러블', '피부톤', '각질/피부결', '민감성', '자외선 차단', '유기농'].map(
          (item) => (
            <label
              key={item}
              className={`checkbox-item ${skinConcerns.includes(item) ? 'selected' : ''}`}
            >
              <input
                type="checkbox"
                value={item}
                checked={skinConcerns.includes(item)}
                onChange={() => handleConcernChange(item)}
                disabled={
                  !skinConcerns.includes(item) && skinConcerns.length >= 3
                }
              />
              {item}
            </label>
          )
        )}
      </div>

      <label
        className='biglabel'
        >성별 선택</label>
      <div className="radio-group">
        {['남성', '여성'].map((g) => (
          <label
            key={g}
            className={`radio-item ${gender === g ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name="gender"
              value={g}
              checked={gender === g}
              onChange={() => setGender(g)}
            />
            {g}
          </label>
        ))}
      </div>

      <button className="signin-btn" onClick={handleStartAnalysis}>
        피부분석 시작하기 →
      </button>
    </div>
  );
};

export default RightPanel;
