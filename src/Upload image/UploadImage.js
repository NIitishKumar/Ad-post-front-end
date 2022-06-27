import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

function UploadImage() {

    const [images, setImages] = useState([])
    const [values, setValues] = useState({
    })

    let history = useNavigate()

    useEffect( () => {
      try {
        async function imageFunc() {
          let data = await axios({
            method:'GET',
            url:"https://ad-post.herokuapp.com/image",
          })
          setImages(data.data.images)
        }

        imageFunc()
      
      } catch (error) {
        console.log(error)
        
      }
    },[])

    const handleChange = async (e) => {
        console.log(e.target.files[0].name)
        setValues({...values,[e.target.name]:e.target.files[0],['name']:e.target.files[0].name})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        console.log(values)
        formData.append('name',values.name)
        formData.append('image',values.image)
        try {
            
        await axios({
            url:'https://ad-post.herokuapp.com/image',
            method:'post',
            data:formData
        }).then(res => {
          if (res.status === 200) {
            history('/gallery')
          }
        })
        } catch (error) {
            console.log(error)
        }
        
    getImages()
    }

    const getImages = async () => {
      let data = await axios({
        method:'GET',
        url:"https://ad-post.herokuapp.com/image",
      })
      setImages(data.data.images)

      // return data
    }


    

  return (
    <div>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        style={{
          backgroundColor: "#f2f6fc",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3%",
        }}
        width="80%"
        height={"80vh"}
      >
      <form onSubmit={handleSubmit} >
        <Grid
          container
          alignItems={"center"}
          direction="column"
          justifyContent="center"
        >
          <Grid item sm={12}>
            <CloudUploadIcon />
          </Grid>
          <Grid item sm={12}>
            <Button component="label" variant="contained"><input type="file" hidden name='image' onChange={handleChange} />Select file</Button>
          </Grid>
          <Grid item sm={12} >
              <Button type='submit' >Upload</Button>
          </Grid>
        </Grid>
          </form>
        {/* {
          images && images.map(x => {
            console.log(x)
            // const base64String = btoa(String.fromCharCode(...new Uint8Array(x.image.data)));
            return <img src={`http://localhost:9000/${x.image}`} alt="" height='50px' width='50px' />
          })
        } */}
        {/* <img src ="http://localhost:9000/1655809965397.jpeg" /> */}
      </Box>
    </div>
  );
}

export default UploadImage;
