import react from "react";
import {   Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import Protected from "./components/Protected";
import Home from "./pages/Home";
import Layout from './common/Layout'
import LoginRegister from "./pages/LoginRegister";
import Profile from "./pages/Profile";
import ForgetPassword from "./components/form/ForgetPassword";
import Login from './components/form/Login';
import Register from './components/form/Register';
import ResetPassword from './components/form/ResetPassword';
import NotFoundPage from "./pages/NotFoundPage";
import ConfirmEmail from "./components/form/ConfirmEmail";
function App() {

 
  return ( 
    <Layout>
        <Routes>
        {/* public routes */}
          <Route  path="/" element={<Home/>} />

          <Route  path="/logout" element={<Home/>} />
          <Route  path="/login-register" element={<LoginRegister/>} >
            <Route  path="register" element={<Register/>} />
            <Route  path="forgetpassword" element={<ForgetPassword/>} />
            <Route  path="login" element={<Login/>} />
            <Route  path="confirm/:token" element={<ConfirmEmail />} />
            <Route  path="resetpassword/:token" element={<ResetPassword/>} />
          </Route>
          {/* privates routes */}
          <Route  path="/" element={<Protected/>} >
            <Route  path="/profile" element={<Profile/>} />
          </Route>
          {/* unfound */}
          <Route  path="*" element={<NotFoundPage/>} />
        </Routes>
    </Layout> 
  ); 
     
     
}

export default App;
