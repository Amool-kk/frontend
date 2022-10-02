// import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import { useEffect } from 'react';
import Mreport from './pages/mreport/Mreport';


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === 'http://localhost:3000/') {
      navigate('/admin/dashboard')
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/missing_report" element={<Mreport />} />
      </Routes>
    </div>
  );
}

export default App;
