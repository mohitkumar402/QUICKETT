import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import SuccessPage from './pages/SuccessPage';
import ParticlesBG from './components/ParticlesBG';
import HomePage from './pages/homepage';

function App() {
  return (
    <>
      <ParticlesBG />
      <Router>
        <Routes>
         
          <Route path="/" element={<AuthForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
