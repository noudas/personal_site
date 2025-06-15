import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HireMe from './pages/hireMe/HireMe';
import Projects from './pages/projects/projects';
import AboutMe from './pages/aboutMe/aboutMe';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HireMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
