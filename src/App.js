import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact ';
import Ourstore from './pages/Ourstore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsConditions from './pages/TermsConditions';
import SimpleProduct from './pages/SimpleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home/>} />
    <Route path="about" element={<About />}/>
    <Route path="blogs" element={<Blog />} />
    <Route path="blog/:id" element={<SingleBlog />} />
    <Route path="SimpleProduct" element={<SimpleProduct />} />
    <Route path="Contact" element={<Contact />}/>
    <Route path="store" element={<Ourstore />}/>
    <Route path="compare-product" element={<CompareProduct />}/>
    <Route path="wishlist" element={<Wishlist />}/>
    <Route path="login" element={<Login />}/>
    <Route path="signup" element={<Signup />}/>
    <Route path="forgot-Password" element={<ForgotPassword />}/>
    <Route path="ResetPassword" element={<ResetPassword />}/>
    <Route path="privacypolicy" element={<PrivacyPolicy />}/>
    <Route path="refundpolicy" element={<RefundPolicy />}/>
    <Route path="shippingpolivacy" element={<ShippingPolicy />}/>
    <Route path="termsconditions" element={<TermsConditions />}/>
    <Route path="cart" element={<Cart />}/>
    <Route path="checkout" element={<Checkout />}/>
    
   </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
