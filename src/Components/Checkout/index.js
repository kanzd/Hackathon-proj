import React from 'react'
import { ThemeProvider,Card,CardActionArea,CardActions,CardMedia,CardContent,Button,Typography,Grid, Container,Accordion,AccordionSummary,AccordionDetails } from "@mui/material";
import { ExpandMore  } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import Image from "../../assets/Zest_logo_green.png";
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
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2%"}}>
          <img src={Image}></img>
          

          </div>
          
          <div className="payment-head">
         

          <Typography variant="h4" component="h3">
            Select Tenure
          </Typography>
          <Typography variant="span" component="span" style={{color:"grey",fontWeight:300}}>
          Please Select Tenure
          </Typography>
          <img src={window.sessionStorage.getItem("image")} height={100}></img>
          <div>
          {window.sessionStorage.getItem("name")}
          </div>
          <div>
            <div>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>3 Months EMI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
            Principal Interest : 1000 Rps 
            </div>
            <div>
              Fee : 200 Rps
            </div>
            <div>
              Total : 1200 Rps
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>3 Months EMI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
            Principal Interest : 1000 Rps 
            </div>
            <div>
              Fee : 200 Rps
            </div>
            <div>
              Total : 1200 Rps
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>3 Months EMI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
            Principal Interest : 1000 Rps 
            </div>
            <div>
              Fee : 200 Rps
            </div>
            <div>
              Total : 1200 Rps
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
      
          </div>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  )
}
