import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Explore from './components/pages/Explore/Explore';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Order from './components/pages/Order/Order';
import Register from './components/pages/Register/Register';
import UserLayout from './components/UserLayout/UserLayout';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />} >
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="order" element={<Order />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
