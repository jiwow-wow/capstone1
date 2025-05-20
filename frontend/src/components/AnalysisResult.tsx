import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  Cell,
} from 'recharts';

type AnalysisResultProps = {
  graphData: {
    '색소침착 개수': number;
    '수분': number;
    '탄력': number;
    '모공 개수': number;
  };
};

const getColor = (key: string, value: number) => {
  if (key === '수분' || key === '탄력') {
    // 수분, 탄력은 낮으면 빨강, 높으면 파랑 (진한 색상 적용)
    return value < 0 ? '#D81239' : '#00BEE1';
  } else if (key === '색소침착 개수' || key === '모공 개수') {
    // 색소침착 개수, 모공 개수는 높으면 빨강, 낮으면 초록 (빨간색 진하게 변경)
    return value > 0 ? '#D81239' : '#00BEE1';
  }
  return '#ccc';
};
const AnalysisResult: React.FC<AnalysisResultProps> = ({ graphData }) => {
  // z-score 범위 가정: -2 ~ 2
  const domainMin = -2;

  // 첫번째 그래프 데이터 (수분, 탄력)
  const firstChartData = [
    {
      항목: '수분',
      음수값: graphData['수분'] < 0 ? graphData['수분'] - domainMin : 0, // 값 - (-2)
      양수값: graphData['수분'] > 0 ? graphData['수분'] : 0,
    },
    {
      항목: '탄력',
      음수값: graphData['탄력'] < 0 ? graphData['탄력'] - domainMin : 0,
      양수값: graphData['탄력'] > 0 ? graphData['탄력'] : 0,
    },
  ];

  // 두번째 그래프 데이터 (색소침착 개수, 모공 개수)
  const secondChartData = [
    { 항목: '색소침착 개수', 값: graphData['색소침착 개수'] },
    { 항목: '모공 개수', 값: graphData['모공 개수'] },
  ];

  return (
    <div className="result-box">
      <h3 className="subtitle">피부 항목별 분석 결과 (z-score)</h3>

      {/* 첫번째 그래프: 수분, 탄력 */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={firstChartData}
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
          barGap={10}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[domainMin, 2]} />
          <YAxis type="category" dataKey="항목" />
          <Tooltip />
          {/* <Legend /> */}

          {/* 음수값 막대 */}
          <Bar
            dataKey="음수값"
            barSize={10}
            stackId="a"
            fill="#F28C8C"
            background={{ fill: '#eee' }}
            isAnimationActive={false}
          >
            {firstChartData.map((entry, index) => (
              <Cell
                key={`neg-cell-${index}`}
                fill={getColor(entry.항목, entry.음수값 - domainMin)}
              />
            ))}
            <LabelList
              dataKey="음수값"
              position="insideLeft"
              formatter={(
                val: number,
                _: any,
                entry?: { value?: number }
              ) =>
                entry && entry.value !== undefined && entry.value < 0
                  ? val.toFixed(2)
                  : ''
              }
            />
          </Bar>

          {/* 양수값 막대 */}
          <Bar
            dataKey="양수값"
            barSize={10}
            stackId="a"
            fill="#A2D5F2"
            isAnimationActive={false}
          >
            {firstChartData.map((entry, index) => (
              <Cell key={`pos-cell-${index}`} fill={getColor(entry.항목, entry.양수값)} />
            ))}
            <LabelList
              dataKey="양수값"
              position="insideRight"
              formatter={(
                val: number,
                _: any,
                entry?: { value?: number }
              ) =>
                entry && entry.value !== undefined && entry.value >= 0
                  ? val.toFixed(2)
                  : ''
              }
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <h3 className="subtitle" style={{ marginTop: 40 }}>
        색소침착 & 모공 개수 분석 결과
      </h3>

      {/* 두번째 그래프: 색소침착 개수, 모공 개수 */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={secondChartData}
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 'dataMax']} />
          <YAxis type="category" dataKey="항목" />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="값" barSize={18}>
            {secondChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.항목, entry.값)} />
            ))}
            <LabelList
              dataKey="값"
              position="right"
              formatter={(val: number) => val.toFixed(2)} 
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalysisResult;
