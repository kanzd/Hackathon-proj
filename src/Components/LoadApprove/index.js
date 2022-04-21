import React from 'react'
import Navbar from "../Shared/Navbar/index";
import {ThemeProvider, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { DoneAllRounded } from "@mui/icons-material";

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

         <Typography > 
          
             <div id="lotte" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"80vh",fontSize:"30px",fontWeight:"bolder",color:"#0ace5f"}}>
               <div style={{fontSize:"50px",margin:"2%"}}>
                 Loan Approved
               </div>
             <DoneAllRounded  color='primary' style={{fontSize:"200px"}}/>
           
             </div>
             
             
              </Typography>
         </ThemeProvider>
    </div>
  )
}
