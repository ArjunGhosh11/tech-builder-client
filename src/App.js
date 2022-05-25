import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import MyOrders from './Pages/Dashboard/MyOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireUser from './Pages/Login/RequireUser';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addReview' element={<RequireUser><AddReview></AddReview></RequireUser>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='myOrders' element={<RequireUser><MyOrders></MyOrders></RequireUser>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='manageAllOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="myPortfolio" element={<MyPortfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
