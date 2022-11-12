// import React from "react";
import {   Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";

import ForgetPassword from "./ForgetPassword";

// import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "./NotFound";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Login from './components/form/Login';
import Register from './components/form/Register';
function App() {
 
  return (
   
    // <BrowserRouter>
    // <Container>
    // <Row>
    //   <Col className="text-center">
    //     <h1>Authentication</h1>

    //     <nav id="navigation">
    //       <NavLink to="/Home">HOME</NavLink>
    //       <NavLink to="/login">LOGIN</NavLink>
    //       <NavLink to="/register">REGISTER</NavLink>
    //     </nav>
    //   </Col>
    // </Row>

   
    <Routes>
    
      <Route  path="/" element={<Home/>} />
      <Route  path="loginregister" element={<LoginRegister/>} >
        <Route  path="register" element={<Register/>} />
        <Route  path="login" element={<Login/>} />
      </Route>
      {/* <Route  path="*" element={<NotFound/>} /> */}
      {/* <Route  path="/forgetpassword" element={<ForgetPassword/>} /> */}
    </Routes>
  // </Container>
    // </BrowserRouter>
    // <Container>
    //   <Row>
    //   <Col xs={12} sm={12} md={6} lg={6}>
    //     <Register />
    //   </Col>
    //   <Col xs={12} sm={12} md={6} lg={6}>
    //     <Login />
    //   </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
