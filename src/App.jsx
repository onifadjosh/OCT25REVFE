import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Blog from "./pages/Blog";
import AuthGuard from "./auth/AuthGuard";
import Layout from "./pages/Layout";
import Product from "./pages/Product";

const App = () => {
  let isAuthenticated = localStorage.getItem("token");
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route element={<AuthGuard isAuthenticated={isAuthenticated}/>}>
          <Route path="/profile" element={<Profile />} />

          

        </Route>


        <Route path="/blog/:username" element={<Blog />} />

        <Route element={<Layout/>}>
          <Route path="/product" element={<Product/>}/>
          <Route path="/home" element={<Home />} />

          <Route path="/todo" element={<Todo />} />

         
        </Route>
        
      </Routes>
    </>
  );
};

export default App;
