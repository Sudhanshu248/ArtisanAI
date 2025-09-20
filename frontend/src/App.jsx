import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/login/index.jsx';
import Signup from './Components/SignUp/index.jsx';
import Dashboard from './Components/dashboard/index.jsx'; 
import Home from './Components/home/index.jsx';
import CreateImage from './Components/Image/index.jsx';
import NotFound from './Components/notFound.jsx';
// import CreateShortVideo from './Components/Video/index.jsx';
// import CreateAIPoster from './Components/Poster/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enhance-image" element={<CreateImage />} />
        <Route path='*' element={<NotFound />} />

        {/* <Route path="/create-ai-poster" element={<CreateAIPoster />} /> */}        
        {/* <Route path="/create-ai-video" element={<CreateShortVideo />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App