import react from "react";
import {   Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import ForgetPassword from "./components/form/ForgetPassword";
import Protected from "./components/Protected";
import Home from "./pages/Home";
import Layout from './common/Layout'
import LoginRegister from "./pages/LoginRegister";
import Profile from "./pages/Profile";
import Login from './components/form/Login';
import Register from './components/form/Register';
import ResetPassword from './components/form/ResetPassword';
function App() {

 
  return ( 
    <Layout>
        <Routes>
        
          <Route  path="/" element={<Home/>} />

          <Route  path="/" element={<Protected/>} >
            <Route  path="/logout" element={<Home/>} />
            <Route  path="/profile" element={<Profile/>} />
          </Route>
          <Route  path="/login-register" element={<LoginRegister/>} >
            <Route  path="register" element={<Register/>} />
            <Route  path="forgetpassword" element={<ForgetPassword/>} />
            <Route  path="login" element={<Login/>} />
            <Route  path="resetpassword/:token" element={<ResetPassword/>} />
          </Route>
        </Routes>
    </Layout> 
  ); 
     
     
}

export default App;
