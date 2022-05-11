import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { fileUpload } from "../Component/Upload";

function Profile() {
  const [Values, setValues] = useState({
    name: "",
    phone: 0,
    email: "",
    image: "",
  });
  const [user, setuser] = useState([]);
  const [edit, setEdit] = useState(false);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const getUser = async () => {
    try {
      await axios({
        method: "GET",
        url: `https://ad-post.herokuapp.com/user/${id}`,
      }).then((res) => {
        setuser(res.data.user);
        setloading(false);
        setValues({
          name: res.data.user.name,
          email: res.data.user.email,
          phone: res.data.user.phone,
          image: res.data.user.image,
        });
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const handleChange = async (e) => {
    if (e.target.name === "image") {
      // setValues({...Values,[e.target.name]:e.target.files[0]})
      console.log(e.target.files[0]);
      let { location } = await fileUpload(e.target.files[0]);
      if (location) {
        setValues({ ...Values, image: location });
      }
    } else {
      setValues({ ...Values, [e.target.name]: e.target.value });
    }
  };

  const handleSave = async (e) => {
    setloading(true);
    setEdit(false);
    try {
      await axios({
        method: "PUT",
        url: `https://ad-post.herokuapp.com/user/${id}`,
        data: Values,
      }).then((res) => {
        if (res.status === 200) {
          getUser();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };


  const logOutClick = () => {
    navigate(`/login`)
    window.localStorage.removeItem('userMail')
  }

  const { name, email, phone } = Values;

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      minHeight="50vh"
    >
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        <Grid lg={4} container spacing={3} pt={10}>
          <Grid xs={12}>
            <ArrowBackIcon
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/home/${id}`)}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3">Profile</Typography>
          </Grid>
          {edit ? (
            <Grid item xs={4}>
              <Button
                disableElevation
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                style={{ cursor: "pointer" }}
                onClick={handleSave}
              >
                Save
              </Button>
            </Grid>
          ) : (
            <Grid item xs={4}>
              <Typography
                variant="h6"
                style={{ cursor: "pointer" }}
                onClick={() => setEdit(true)}
              >
                EDIT
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Stack direction={"row"} spacing={2} my={5}>
              <Avatar
                alt="profile image"
                src={
                  user?.image
                    ? user?.image
                    : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F05%2F11%2F15%2F38%2Ftom-5158824_960_720.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fillustrations%2Ftom-jerry-cartoon-art-mickey-mouse-5158824%2F&tbnid=U4A_DSp3T1EIqM&vet=12ahUKEwjdxuL_ttT3AhWU_TgGHfnxBBEQMygFegUIARDiAQ..i&docid=obV8wILZjU_T4M&w=758&h=720&q=tom&ved=2ahUKEwjdxuL_ttT3AhWU_TgGHfnxBBEQMygFegUIARDiAQ"
                }
                sx={{ width: 200, height: 200 }}
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Name: </Typography>
          </Grid>
          {edit ? (
            <Grid xs={6} mb={3}>
              <FormControl fullWidth>
                <TextField
                  onChange={handleChange}
                  required
                  type={"name"}
                  value={name}
                  name="name"
                  variant="outlined"
                  label="Name"
                />
              </FormControl>
            </Grid>
          ) : (
            <Grid item xs={6}>
              <Typography variant="h6">{user?.name}</Typography>
            </Grid>
          )}

          <Grid item xs={6}>
            <Typography variant="h5">Email: </Typography>
          </Grid>
          {edit ? (
            <Grid xs={6} mb={3}>
              <FormControl fullWidth>
                <TextField
                  onChange={handleChange}
                  required
                  value={phone}
                  type={"number"}
                  name="phone"
                  variant="outlined"
                  label="Phone Number"
                />
              </FormControl>
            </Grid>
          ) : (
            <Grid item xs={6}>
              <Typography variant="h6">{user?.email}</Typography>
            </Grid>
          )}
          <Grid item xs={6}>
            <Typography variant="h5">Phone: </Typography>
          </Grid>
          {edit ? (
            <Grid xs={6} mb={3}>
              <FormControl fullWidth>
                <TextField
                  onChange={handleChange}
                  required
                  type={"email"}
                  name="email"
                  value={email}
                  variant="outlined"
                  label="Email"
                />
              </FormControl>
            </Grid>
          ) : (
            <Grid item xs={6}>
              <Typography variant="h6">{user?.phone}</Typography>
            </Grid>
          )}
          {edit && (
            <TextField
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
              }}
              type={"file"}
              id="standard-basic"
              label="Image"
              name="image"
              variant="standard"
              style={{ border: "0" }}
            />
          )}
          <Grid item xs={12}>
            <Typography variant="" color=''>
              <Button
                onClick={logOutClick}
                disableElevation
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="error"
              >
                Log out
              </Button>
            </Typography>
          </Grid>
          {/* <Grid item xs={6}>
          <Typography variant="h5">Password: </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">{user?.password?.length}</Typography>
        </Grid> */}
        </Grid>
      )}
    </Box>
  );
}

export default Profile;
