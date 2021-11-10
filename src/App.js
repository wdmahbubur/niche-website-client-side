import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Explore from './components/pages/Explore/Explore';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
