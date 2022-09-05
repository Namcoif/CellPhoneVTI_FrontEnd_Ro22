import './App.css';

import MProducts from './pages/manager/products/MProducts';
import { Navigate, Route, Routes } from 'react-router-dom';
import MOrders from './pages/manager/orders/MOrders';
import MCategory from './pages/manager/categories/MCategory';
import HomePage from './pages/home/HomePage';
import Management from './pages/manager/Management';
import Signin from './pages/home/Signin/Signin';
import Signup from './pages/home/signup/Signup';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import { useSelector } from 'react-redux';

function App() {

  // const isLoggedIn = useSelector(state=>state.user)
  const isLoggedIn = localStorage.getItem('login')

  console.log(isLoggedIn);

  if (isLoggedIn !== 'true') {
    return (
      <div className='App'>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Navigate to="/sign-in" />} />
        </Routes>
      </div>
    )
  }
  else
    return (
      <div className='App'>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<HomePage />} >
            <Route path='/managements' element={<Management />} />
            <Route path="/api/v1/product-management" element={<MProducts />} />
            <Route path="/api/v1/product-catlog-management" element={<MCategory />} />
            <Route path="/api/v1/oder-management" element={<MOrders />} />
            {/* <Route path="/" element={<Navigate to="/api/v1/product-management" />} /> */}
            <Route path='/' element={<Navigate to={'/managements'} />} />

          </Route>
          {/* <Route path='/' element={<Navigate to={'/managements'} />} /> */}

        </Routes>
      </div>
    );
}

export default App;
