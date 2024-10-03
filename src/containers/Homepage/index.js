import React from "react";
import logo from "../../logo.svg";
// import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import Particless from "../../components/particles";
import zIndex from "@mui/material/styles/zIndex";
// import Particles from "react-particles";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  return (
    <Box>
      <Particless style={{ zIndex: -1 }} />

      <Card sx={{ maxWidth: 345, marginLeft: "10%", marginTop: "10%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default HomePage;
