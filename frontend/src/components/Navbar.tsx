import React, { useEffect, useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  currentStep: number;
  totalSteps?: number;
  onBack: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentStep, totalSteps = 3, onBack }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0); // 초기 0

  useEffect(() => {
    const target = (currentStep / totalSteps) * 100;
    const timeout = setTimeout(() => {
      setAnimatedProgress(target);
    }, 100); // 살짝 딜레이 후 애니메이션 시작

    return () => clearTimeout(timeout);
  }, [currentStep, totalSteps]);

  return (
    <div className="step-navbar">
      <button className="back-button" onClick={onBack}> ⇠</button>
      <div
        className="step-progress"
        style={{ ['--progress' as any]: animatedProgress }}
      />
    </div>
  );
};

export default Navbar;
