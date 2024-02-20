import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NetflixHomepage from './NetflixHomepage';
import Appp from './Appp';
function navigateToPage(page) {
  window.location.href = page;
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NetflixHomepage />} />
        <Route path="/home" element={<Appp />} />
      </Routes>
    </Router>
  );
}

export default App; 
