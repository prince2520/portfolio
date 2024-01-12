import './common.css'
import './App.css';

import Home from './pages/Home/Home.js';

import { useState } from 'react';

function App() {

  return (
    <div className={`flex-center App dark`}>
      <Home/>
    </div>
  );
};

export default App;
