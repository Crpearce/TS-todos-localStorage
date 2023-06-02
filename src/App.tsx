import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Colby from './components/colby/colby.component';
// import Natalie from './components/natalie/natalie.component';
import Home from './components/home/home.component';

import './App.css'


const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Colby" element={<Colby />} />
        <Route path="/Natalie" element={<Natalie />} /> */}
      </Routes>
    </>
  );
};

export default App;
