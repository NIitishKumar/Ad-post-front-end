import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from 'axios';
import instance from '../helpers/Axios';
import Header from '../Header/Header';

export default function Gallery() {

    
    const [images, setImages] = React.useState([])

    React.useEffect( () => {
        try {
          async function imageFunc() {
              let data = await instance({
                method:"GET",
                url:"/image",
              })
              console.log(data)
            // let data = await axios({
            //   method:'GET',
            //   url:"https://ad-post.herokuapp.com/image",
            // })
            setImages(data.data.images)
          }
  
          imageFunc()
        
        } catch (error) {
          console.log(error)
          
        }
      },[])


  return (
    <>
    <Header />
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        padding:'4% 6%',
        '& > :not(style)': {
          m: 1,
          width: 128,
        },
      }}
    >
        {
            images && images.map((x) => {
                return <Card sx={{ minWidth:300, maxWidth:400, maxHeight:400, minHeight:400 }}>

                <CardMedia
                  component="img"
                  image={`https://ad-post.herokuapp.com/${x.image}`}
                  alt="Paella dish"
                  // width='300'
                  // height='400'
                />
          
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {/* Price: {data.price} */}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  </CardActions>
              </Card>
            })
        }
            
    </Box>
    </>
  );
}


