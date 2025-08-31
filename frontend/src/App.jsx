import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/login/index.jsx';
import Signup from './Components/SignUp/index.jsx';
import Dashboard from './Components/dashboard/index.jsx'; // assuming you have this


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
