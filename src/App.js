import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Principal } from './Pages/Principal.jsx';
import { Product } from './Pages/Product.jsx';
import { Login } from './Pages/Login.jsx';
import { SignUp } from './Pages/SignUp.jsx';

function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path='/product' element={<Product />}/>
      <Route path='/login' element={<Login />}/>  
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
  </Router>
  </div>
  );
}

export default App;
