import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Blog from "./pages/Blog";
import AuthGuard from "./auth/AuthGuard";

const App = () => {
  let isAuthenticated = localStorage.getItem("token");
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route element={<AuthGuard isAuthenticated={isAuthenticated}/>}>
          <Route path="/profile" element={<Profile />} />

          <Route path="/home" element={<Home />} />

          <Route path="/todo" element={<Todo />} />

          <Route path="/blog/:id" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
