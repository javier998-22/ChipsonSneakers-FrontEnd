import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Principal } from './Pages/Principal.jsx';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
    </Routes>
  </Router>);
}

export default App;
