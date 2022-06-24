import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Gallery from "../Upload image/Gallery";
import Login from '../Login/Login';
import { isAuthenticated } from '../helpers/isAuthenticated';

function PrivateRoutes({element}) {
  return isAuthenticated() ? element : <Login />
      
}

export default PrivateRoutes