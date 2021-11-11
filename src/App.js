import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Explore from './components/pages/Explore/Explore';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Order from './components/pages/Order/Order';
import Register from './components/pages/Register/Register';
import UserLayout from './components/UserLayout/UserLayout';
import DashboardHome from './components/pages/Dashboard/DashboardHome/DashboardHome';
import MyOrders from './components/pages/Dashboard/User/MyOrders/MyOrders';
import Pay from './components/pages/Dashboard/User/Pay/Pay';
import Review from './components/pages/Dashboard/User/Review/Review';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState("Dashboard");

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
          <Route path="/dashboard" element={<Dashboard page={page} />} >
            <Route index element={<DashboardHome setPage={setPage} />} />
            <Route path="my-orders" element={<MyOrders setPage={setPage} />} />
            <Route path="pay" element={<Pay setPage={setPage} />} />
            <Route path="review" element={<Review setPage={setPage} />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
