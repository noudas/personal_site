import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HireMe from './pages/hireMe/HireMe';
import Projects from './pages/projects/projects';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HireMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
