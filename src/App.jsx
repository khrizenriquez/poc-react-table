import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicTablePage from './pages/DynamicTablePage';
import Nav from './Nav';
import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/table/:id" element={<DynamicTablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
