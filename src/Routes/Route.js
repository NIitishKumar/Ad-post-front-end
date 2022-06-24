import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Home from '../Home/Home'
import Profile from "../Profile/Profile";
import Ad from "../Ads/CreateAd";
import AllPosts from "../AllPosts/AllPosts";
import UploadImage from "../Upload image/UploadImage";
import Gallery from "../Upload image/Gallery";
import PrivateRoutes from "./PrivateRoutes";

export default function () {

  let allRoutes = [
    {
      path:'/',
      isPrivate: false,
      element:<AllPosts />
    },
    {
      path:'/login',
      isPrivate: false,
      element:<Login />
    },
    {
      path:'/signup',
      isPrivate: true,
      element:<SignUp />
    },
    {
      path:'/home/:id',
      isPrivate: false,
      element:<Home />
    },
    {
      path:'/profile/:id',
      isPrivate: false,
      element:<Profile />
    },
    {
      path:'/:id',
      isPrivate: false,
      element:<Ad />
    },
    {
      path:'/allposts',
      isPrivate: false,
      element:<AllPosts />
    },
    {
      path:'image-upload',
      isPrivate: false,
      element:<UploadImage />
    },
    {
      path:'/gallery',
      isPrivate: true,
      element:<Gallery />
    }
  ]

  return (
    <Router>
      <Routes>
        {
          allRoutes.map((route, index )=> {
            let {path, isPrivate, element} = route
            return <Route path={path} element={isPrivate ? <PrivateRoutes element={element} /> :  element} />
          })
        }
      </Routes>
    </Router>
  );
}
