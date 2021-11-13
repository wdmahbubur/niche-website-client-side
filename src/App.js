import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Explore from './components/pages/Explore/Explore';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';
import Register from './components/pages/Register/Register';
import UserLayout from './components/UserLayout/UserLayout';
import DashboardHome from './components/pages/Dashboard/DashboardHome/DashboardHome';
import MyOrders from './components/pages/Dashboard/User/MyOrders/MyOrders';
import Pay from './components/pages/Dashboard/User/Pay/Pay';
import Review from './components/pages/Dashboard/User/Review/Review';
import ManageAllOrder from './components/pages/Dashboard/Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from './components/pages/Dashboard/Admin/ManageProducts/ManageProducts';
import AddNewProduct from './components/pages/Dashboard/Admin/AddNewProduct/AddNewProduct';
import MakeNewAdmin from './components/pages/Dashboard/Admin/MakeNewAdmin/MakeNewAdmin';
import Context from './context/context';
import RequireAuth from './components/PrivateRoute/PrivateRoute';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import NotFound from './components/pages/NotFound/NotFound';
function App() {
  const [page, setPage] = useState("Dashboard");

  return (
    <div>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLayout />} >
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="product/:productId" element={
                <RequireAuth>
                  <ProductDetails />
                </RequireAuth>
              } />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/dashboard" element={
              <RequireAuth>
                <Dashboard page={page} />
              </RequireAuth>
            } >
              <Route index element={<DashboardHome setPage={setPage} />} />
              <Route path="my-orders" element={<MyOrders setPage={setPage} />} />
              <Route path="pay" element={<Pay setPage={setPage} />} />
              <Route path="review" element={<Review setPage={setPage} />} />
              <Route path="manage-all-orders" element={<ManageAllOrder setPage={setPage} />} />
              <Route path="manage-products" element={<ManageProducts setPage={setPage} />} />
              <Route path="add-new-products" element={<AddNewProduct setPage={setPage} />} />
              <Route path="make-new-admin" element={<MakeNewAdmin setPage={setPage} />} />
            </Route>
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
