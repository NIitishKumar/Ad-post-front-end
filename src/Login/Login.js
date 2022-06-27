import React, { useState } from "react";

// material-ui
import {
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { Authenticate } from "../helpers/isAuthenticated";
import instance from "../helpers/Axios";
import CircularProgress from '@mui/material/CircularProgress';


function Login() {

    const [Values, setValues ]= useState({
        email:'',
        password:''
    });
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
  const handleChange = (e) => {
      setValues({...Values, [e.target.name]:e.target.value})
  };

  const handleSubmit = async () => {
    setLoading(true)
    try{
      // await instance({
      //   method:"POST",
      //   url:"/signin",
      //   data:Val
      // })
        await axios({
            method:'POST',
            url:'http://localhost:9000/user/signin',
            data:Values
        }).then((res)=>{
            if(res.status === 200){
              Authenticate(res.data.token)
              console.log(res.data.token)
              window.localStorage.setItem('userMail',res.data.token)
                navigate(`/home/${res.data.user._id}`)
                setLoading(false)
            }else{
                console.log('dsfsadds')
                alert('User not found with these cradentials !')
            }
        })
      }catch(err){
          console.log(err)
      }

  }


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      style={{paddingLeft:'15%'}}
    >
      {
        loading 
        ? 
        
      <CircularProgress />
      :

      <Grid container justifyContent="center">
        <Grid container lg={4} spacing={3}>
          <Grid xs={10} mb={3}>
            <FormControl fullWidth>
              <TextField
                onChange={handleChange}
                required
                type={"email"}
                name="email"
                variant="outlined"
                label="Email"
                inputProps={{
                  autocomplete: "new-password",
              }}
              />
            </FormControl>
          </Grid>
          <Grid xs={10}>
            <FormControl fullWidth>
              <TextField
                onChange={handleChange}
                required
                type={"password"}
                name="password"
                variant="outlined"
                label="Password"
                autoComplete='new-password'
              />
            </FormControl>
            <a href="/signup">
              <span style={{ float: "right" }}> SignUp?</span>
            </a>
          </Grid>
          <Grid item xs={4} style={{ paddingLeft: 0, paddingTop: "10px" }}>
            <Button
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Grid>
}
      {/* <Typography variant="" ml={5} className="createAd">
        <Button
        onClick={() => navigate('/allPosts')}
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          All Posts
        </Button>
      </Typography> */}
    </Box>
  );
}

export default Login;
