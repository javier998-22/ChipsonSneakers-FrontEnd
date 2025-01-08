import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Principal } from './Pages/Principal.jsx';
import { Product } from './Pages/Product.jsx';

function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path='/product' element={<Product />}/>

    </Routes>
  </Router>
  </div>
  );
}

export default App;
