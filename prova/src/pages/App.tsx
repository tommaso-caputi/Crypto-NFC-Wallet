import React from 'react';
import Login from './Login';
import Menu from './Menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='Menu' element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
