import React from "react";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

function Profile() {
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      minHeight="50vh"
    >
      <Grid lg={4} sm={12} container spacing={3}>
        <Grid xs={12}>
          <ArrowBackIcon
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/home")}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3">Profile</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">EDIT</Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} spacing={2} my={5}>
            <Avatar
              alt="profile image"
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F05%2F11%2F15%2F38%2Ftom-5158824_960_720.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fillustrations%2Ftom-jerry-cartoon-art-mickey-mouse-5158824%2F&tbnid=U4A_DSp3T1EIqM&vet=12ahUKEwjdxuL_ttT3AhWU_TgGHfnxBBEQMygFegUIARDiAQ..i&docid=obV8wILZjU_T4M&w=758&h=720&q=tom&ved=2ahUKEwjdxuL_ttT3AhWU_TgGHfnxBBEQMygFegUIARDiAQ"
              sx={{ width: 200, height: 200 }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">Name: </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Nitish Kumar</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">Email: </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Nitishkumar@mail.com</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">Phone: </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">9898989833</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">Password: </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Nitish Kumar</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
