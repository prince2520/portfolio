import './common.css'
import './App.css';

import { useContext } from 'react';
import Home from './pages/Home/Home.js';

import DarkContext from './context/DarkModeContext.jsx';


function App() {

  const darkCtx = useContext(DarkContext);

  return (
      <div className={`flex-center App ${darkCtx.dark ? 'dark' : ''} `}>
        <Home/>
      </div>
  );
};

export default App;
