import React from 'react'
import { ThemeProvider,Card,CardActionArea,CardActions,CardMedia,CardContent,Button,Typography,Grid } from "@mui/material";
import Navbar from "../Shared/Navbar/index";
import { createTheme } from "@mui/material/styles";
import One from "../../assets/one.jpg";
import Three from "../../assets/three.jfif";
import Two from "../../assets/two.jpg";
import { useNavigate } from "react-router-dom";
// import { } from "@mui/icons-material";
const theme = createTheme({palette: {
  primary: {
    light: "#0ace5f",
    main: "#0ace5f",
    dark: "#0ace5f",
    contrastText: "#fff",
  },
  secondary: {
    light: "#0ace5f",
    main: "#0ace5f",
    dark: "#0ace5f",
    contrastText: "#000",
  },
},})
export default function Index() {
  const navigate = useNavigate();
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar></Navbar>
    <Grid container justifyContent={"center"} spacing={3} style={{marginTop:"3%"}}>
<Grid item>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={One}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Buy BATA Men's Formal Office Slip On Shoes (9 UK) Black from Formal Shoes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={(e)=>{
          navigate("/checkout");
        }}>Buy Now</Button>
      </CardActions>
    </Card>
</Grid>
<Grid item>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={Two}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mac Book Pro
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Free upgrade to Windows 11 when available. Disclaimer - Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue into 2022. Specific timing will vary by device.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"  onClick={(e)=>{
          navigate("/checkout");
        }}>Buy Now</Button>
      </CardActions>
    </Card>
</Grid>
<Grid item>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={Three}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          I-Phone
        </Typography>
        <Typography variant="body2" color="text.secondary">
        iPhone 13 Pro and iPhone 13 Pro Max do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"  onClick={(e)=>{
          navigate("/checkout");
        }}>Buy Now</Button>
      </CardActions>
    </Card>
</Grid>
    </Grid>
    
    </ThemeProvider>
    
    </>
  )
}
