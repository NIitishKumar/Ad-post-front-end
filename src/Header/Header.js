import React from "react";
import "./HeaderCss.css";
import {
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";

function Header() {
  return (
    <div class="mainHeading">
      <h4>Mohit</h4>{" "}
      <a href="/image-upload" >
      <Button
                disableElevation
                type="submit"
                variant="contained"
                style={{ cursor: "pointer" }}
                // onClick={<Redirect to="/somewhere/else" />              }
              >
                Upload
              </Button>
              </a>
    </div>
  );
}

export default Header;
