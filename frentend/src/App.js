// import React from "react";
import {  Link , Routes, Route , NavLink } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";

// import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "./NotFound";
import Home from "./Home";
function App() {
 
  return (
  
    // <BrowserRouter>
    <Container>
    <Row>
      <Col className="text-center">
        <h1>Authentication</h1>

        <nav id="navigation">
          <NavLink to="/Home">HOME</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
        </nav>
      </Col>
    </Row>

    {/* create routes here */}
    <Routes>
      {/* <Route  path="/" component={Account} /> */}
      <Route  path="/home" element={<Home/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/register" element={<Register/>} />
      <Route  path="*" element={<NotFound/>} />
      <Route  path="/forgetpassword" element={<ForgetPassword/>} />
      {/* <ProtectedRoutes path="/auth" component={AuthComponent} /> */}
    </Routes>
  </Container>
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
