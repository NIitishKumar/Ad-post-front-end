import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { Grid } from '@mui/material';
import Route from './Routes/Route';
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom'

function App() {

  // // const navigate = useNavigate()
  // const location = useLocation()

  // useEffect(() => {
  //   if (!window.localStorage.getItem('userMail')) {
  //     window.location.push('/')
  //     // navigate('/login')
  //   }
  // },[location])

  return (
    <>
      <Route />
      </>
  )
}

export default App;
