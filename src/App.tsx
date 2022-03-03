import { useState, useMemo, useCallback } from 'react';
// import Landing from '@/pages/Landing';
import './style/index.less';

function App() {
  return (
    <div className="demo-app">
      <header className="demo-app-header">
        <h1>Yara & CO.</h1>
      </header>
      <div style={{ flex: 1 }} />
      <footer className="demo-app-footer">
        SmartFert 3000
        {' '}
        <br />
        &copy; 2022 Yara & Co. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
