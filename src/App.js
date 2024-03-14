import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Warranty from './pages/Warranty';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warranty />} />
          <Route path="/warranty" element={<Warranty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
