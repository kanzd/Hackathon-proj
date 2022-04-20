import React from 'react'
import { ThemeProvider,Card,CardActionArea,CardActions,CardMedia,CardContent,Button,Typography,Grid, Container } from "@mui/material";
import { } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import "./index.css";
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
  return (
    <div>
      
      <ThemeProvider theme={theme}>
        <Container>
          <div className="payment-head">
            <h1>
              Payment Request
            </h1>
            <div style={{}}>

            </div>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  )
}
