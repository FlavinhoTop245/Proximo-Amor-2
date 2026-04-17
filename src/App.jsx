import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterOng from './pages/RegisterOng';
import RegisterVolunteer from './pages/RegisterVolunteer';
import OngDashboard from './pages/OngDashboard';
import VolunteerDashboard from './pages/VolunteerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* We exclude the Navbar from dashboards since they have their own layout */}
        <Route path="/ong/dashboard" element={<OngDashboard />} />
        <Route path="/voluntario/dashboard" element={<VolunteerDashboard />} />
        
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/cadastro/ong" element={<RegisterOng />} />
              <Route path="/cadastro/voluntario" element={<RegisterVolunteer />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
