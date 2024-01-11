import Home from './pages/Home/Home.js';

import './App.css';
import { useState } from 'react';

function App() {
  const [dark, isDark] = useState(false);

  return (
    <div className={`App dark`}>
      <Home/>
    </div>
  );
};

export default App;
