import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import reportWebVitals frosrc/reportWebVitalsals'; //이 두 줄은 웹 페이지의 성능 데이터를 측정해서 기록하거나 전송할 수 있게 해주는 함수임
// reportWebVitals(console.log);