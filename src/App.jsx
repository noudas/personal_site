import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HireMe from './pages/hireMe/HireMe';
import Projects from './pages/projects/projects';
import AboutMe from './pages/aboutMe/aboutMe';
import HireMeUXUI from './pages/hireMe/HireMeUXUI';
import HireMeFullStack from './pages/hireMe/HireMeFullStack';
import UXProjects from './pages/hireMe/UXProjects';
import NovaFutura from './pages/uxProjects/novaFutura';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HireMe />} />
          <Route path="/hireme-uxui" element={<HireMeUXUI />} />
          <Route path="/hireme-fullstack" element={<HireMeFullStack />} />
          <Route path="/ux-projects" element={<UXProjects />} />
          <Route path="/ux-projects/nova-futura" element={<NovaFutura />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
