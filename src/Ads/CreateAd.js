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
import {useParams} from 'react-router-dom'
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from 'react-router-dom'


function Ad() {

    const [Values, setValues] = useState({
        title:'',
        category:'',
        price:'',
        description:'',
        image:''
    })

    const {id} = useParams()
    const navigate = useNavigate()

    const navigateFunc = () => {
      navigate(`/home/${id}`)
    }

  const adSubmit = async (e) => {
    e.preventDefault();
    try{
      if(id){
  
        await axios({
          method:"POST",
          url:`https://ad-post.herokuapp.com/ad/${id}`,
          data:{...Values,user:id}
        }).then(res => {
          console.log(res)
          navigateFunc()
        })
      }
    }catch(err){
      console.log(err)
    }
  };

  const handleChange = (e) => {
    setValues({...Values, [e.target.name]:e.target.value})
  }

  return (
    <Box
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      alignItems={"center"}
      p={5}
    >
      <ArrowBackIcon style={{cursor:'pointer'}} onClick={navigateFunc} />
      <form onSubmit={adSubmit}>
        <Grid container xs={6}>
          <Grid item xs={12}>
            <Typography variant="h4" mb={5}>
              Create Ad
            </Typography>
          </Grid>

          <Grid xs={6} mb={5} pr={3}>
            <FormControl fullWidth>
              <TextField
                onChange={handleChange}
                required
                type={"text"}
                name="title"
                variant="outlined"
                label="Title"
              />
            </FormControl>
          </Grid>

          <Grid xs={6} mb={5} pr={3}>
            <FormControl fullWidth>
              <TextField
                onChange={handleChange}
                required
                type={"text"}
                name="category"
                variant="outlined"
                label="Category"
              />
            </FormControl>
          </Grid>

          <Grid xs={6} mb={5} pr={3}>
            <FormControl fullWidth>
              <TextField
                onChange={handleChange}
                required
                type={"text"}
                name="price"
                variant="outlined"
                label="Price"
              />
            </FormControl>
          </Grid>

          <Grid xs={6} mb={5} pr={3}>
            <FormControl fullWidth>
              <TextField
                onChange={handleChange}
                required
                type={"text"}
                name="description"
                variant="outlined"
                label="Description"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} mb={5} pr={3}>
            <input
              accept="image/*"
              name='image'
              onChange={handleChange}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span">
                Upload Image
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Ad;
