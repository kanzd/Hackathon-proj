import React from 'react'
import Navbar from "../Shared/Navbar/index";
import {ThemeProvider, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
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
    <div>
         <ThemeProvider theme={theme}>
         <Navbar></Navbar>
         <Typography> Loan Approve </Typography>
         </ThemeProvider>
    </div>
  )
}
