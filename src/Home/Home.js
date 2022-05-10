import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

function Home() {
  const [ads, setads] = useState([]);
  const [user, setuser] = useState([]);
  const { id } = useParams();

  const getAds = async () => {
    try {
      await axios({
        method: "GET",
        url: `http://localhost:9000/ad/${id}`,
      }).then((res) => {
        setads(res.data.ads);
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
        await axios({
          method: "GET",
          url: `http://localhost:9000/user/${id}`,
        }).then((res) => {
            setuser(res.data.user);
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
  }

  useEffect(() => {
    getAds();
    getUser()
  }, [id]);

  return (
    <Box
      display={"flex"}
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      alignItems={"center"}
      minHeight="100vh"
    >
      {ads?.length > 0
      ?

        ads.map((x) => {
          return <Card name={user?.name} email={user?.email} data={x} />;
        })
    :
    <>
        <h1>No Ads..</h1>
        </>
    }
    <Typography variant="" ml={5} className='createAd'>
    <a href={`/${id}` } style={{display:'block'}}>Create Ad Post</a>
    </Typography>
    </Box>
  );
}

export default Home;
