import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/login/index.jsx';
import Signup from './Components/SignUp/index.jsx';
import Dashboard from './Components/dashboard/index.jsx'; // assuming you have this
import Home from './Components/home/index.jsx';
import CreatePoster from './Components/Poster/index.jsx';
import CreateShortVideo from './Components/Video/index.jsx';
import Chatbot from './Components/ChatBot/index.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-poster" element={<CreatePoster />} />
        <Route path="/create-video" element={<CreateShortVideo />} />
        <Route path="/chat-ai" element={<Chatbot />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
