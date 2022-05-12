import React, { useState, useEffect } from "react";
import Card from "../Component/Card";
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
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom'

function AllPosts() {

      // const navigate = useNavigate()
      const location = useLocation()

      useEffect(() => {
        if (!window.localStorage.getItem('userMail')) {
          // window.location.push('/')
          // navigate('/login')
        }
      },[location])
    
  const [ads, setads] = useState([]);
  const navigate = useNavigate();

  //------> Get all ada
  const getAds = async () => {
    try {
      await axios({
        method: "GET",
        url: `https://ad-post.herokuapp.com/ad/`,
      }).then((res) => {
        setads(res.data.ads);
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAds();
  }, [1]);

  return (
    <Box
      display={"flex"}
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      alignItems={"center"}
      minHeight="100vh"
    >
      {ads?.length > 0 ? (
        ads.map((x) => {
          return (
            <Card
              name={x.user?.name}
              email={x.user?.email ? x.user?.email : "unknown"}
              data={x}
            />
          );
        })
      ) : (
        <h1>Loading..</h1>
      )}

      <Typography variant="" ml={5} className="createAd">
        <Button
        onClick={() => navigate('/login')}
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Sign in
        </Button>
      </Typography>
    </Box>
  );
}

export default AllPosts;
