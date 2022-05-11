import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Home from '../Home/Home'
import Profile from "../Profile/Profile";
import Ad from "../Ads/CreateAd";
import AllPosts from "../AllPosts/AllPosts";

export default function () {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPosts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home/:id" element={<Home />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/:id" element={<Ad />}></Route>
        <Route path="/allposts" element={<AllPosts />}></Route>
      </Routes>
    </Router>
  );
}
