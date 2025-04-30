import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// 지표	설명
// CLS	Cumulative Layout Shift – 화면의 레이아웃이 얼마나 많이 움직였는지
// FID	First Input Delay – 첫 사용자 입력 반응 속도
// FCP	First Contentful Paint – 최초로 내용이 그려지기까지 걸린 시간
// LCP	Largest Contentful Paint – 가장 큰 콘텐츠가 그려지는 시간
// TTFB	Time To First Byte – 첫 바이트 응답 시간