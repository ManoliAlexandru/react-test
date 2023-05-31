import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../components/post-detail/PostDetail";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="post">
          <Route element={<PostDetail />} path="/post/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
