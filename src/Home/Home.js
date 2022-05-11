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
import { useParams, useNavigate } from "react-router-dom";

function Home() {
  const [ads, setads] = useState([]);
  const [user, setuser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAds = async () => {
    try {
      await axios({
        method: "GET",
        url: `https://ad-post.herokuapp.com/ad/${id}`,
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
        url: `https://ad-post.herokuapp.com/user/${id}`,
      }).then((res) => {
        setuser(res.data.user);
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAds();
    getUser();
  }, [id]);

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
          return <Card name={user?.name} image= {user?.image} email={user?.email} data={x} />;
        })
      ) : (
        <>
          <h1>No Ads..</h1>
        </>
      )}
      <Typography variant="" ml={5} className="createAd">
        {/* <a href={`/${id}` } style={{display:'block'}}></a> */}
      </Typography>
      <Typography variant="" ml={5} className="createAd">
        <Button
          onClick={() => navigate(`/${id}`)}
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Create Ad Post
        </Button>
      </Typography>
      <Typography variant="" ml={5} className="profile">
        <Button
          onClick={() => navigate(`/profile/${id}`)}
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          profile
        </Button>
      </Typography>
    </Box>
  );
}

export default Home;
