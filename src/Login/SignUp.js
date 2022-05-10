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

function SignUp() {
  const [Values, setValues] = useState({
    name: "",
    phone:0,
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        await axios({
            method:'POST',
            url:'https://ad-post.herokuapp.com/user',
            data:Values
        }).then((res)=>{
            if(res.status === 200){
                navigate(`/home/${res.data.user._id}`)
            }
        })
      }catch(err){
          console.log(err)
      }

  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid container lg={4} spacing={3}>
            <Grid xs={12} mb={3}>
              <FormControl fullWidth>
                <TextField
                  onChange={handleChange}
                  required
                  type={"name"}
                  name="name"
                  variant="outlined"
                  label="Name"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} mb={3}>
              <FormControl fullWidth>
                <TextField
                  onChange={handleChange}
                  required
                  type={"number"}
                  name="phone"
                  variant="outlined"
                  label="Phone Number"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} mb={3}>
              <FormControl fullWidth>
                <TextField
                  onChange={handleChange}
                  required
                  type={"email"}
                  name="email"
                  variant="outlined"
                  label="Email"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth>
                <TextField
                  onChange={handleChange}
                  required
                  type={"password"}
                  name="password"
                  variant="outlined"
                  label="Password"
                />
              </FormControl>
              <a href="/">
                <span style={{ float: "right" }}> Already have account?</span>
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
              >
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default SignUp;
