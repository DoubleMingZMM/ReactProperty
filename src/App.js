import React from 'react';
import './App.css';
// import Wraper from './components/wraper.js';
// import Count from './components/count.js';
// import Cat from './components/cat.js';
// import MouseTracker from './components/mouseTracker';
// import Example from './components/example.js';
// import DadClass from './components/contextProvider/dadClass.js';
import ErrorBoundary from './components/ErrorBoundary/index.js';
// import ArrayWrap from './components/ArrayWrap';

/* 测试modal 使用portal */
import TestModal from './components/PortalModal/testModal.js';

/* 测试strictMode */
import StrictMode from './components/StrictMode';

/* 测试过时的context */
import Context from './components/context/dadClass.js';



function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <div className="App">
          <Context />
        </div>
      </ErrorBoundary >
    </StrictMode>
  );
}

export default App;
