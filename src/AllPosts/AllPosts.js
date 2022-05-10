import React,{useState,useEffect} from "react";
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

function AllPosts() {
    
  const [ads, setads] = useState([]);

  //------> Get all ada
  const getAds = async () => {
    try {
      await axios({
        method: "GET",
        url: `http://localhost:9000/ad/`,
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
          return <Card name={x.user?.name} email={x.user?.email ? x.user?.email :'unknown'} data={x} />;
        })
      ) : (
        <h1>No Ads..</h1>
      )}
    </Box>
  );
}

export default AllPosts;
