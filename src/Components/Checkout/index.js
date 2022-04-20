import React,{useState} from 'react'
import { ThemeProvider,Card,CardActionArea,CardActions,CardMedia,CardContent,Button,Typography,Grid, Container,Accordion,AccordionSummary,AccordionDetails,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";
import { ExpandMore  } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import Image from "../../assets/Zest_logo_green.png";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../Service/api_calls";
import { api_2 } from "../../const/apis_endpoints";
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
  const navigate = useNavigate();
  const [openDia,setOpenDia]=useState(false);
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
            <div className='acc-compo'>
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
            Principal Interest : $1000
            </div>
            <div>
              Fee : $200
            </div>
            <div>
              Total : $1200
            </div>
            <div style={{textAlign:"center"}}>
            <Button variant="outlined" onClick={async (e)=>{
              
               let phone_number=window.sessionStorage.getItem("phone_number");
              let res = await getRequest(api_2(phone_number));
              if (res.data.state){
              navigate("/loanapprove")
              }
              else{
                setOpenDia(true);
              }
            }}> Select </Button>
            </div>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
   
            </div>
            <div  className='acc-compo'>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>6 Months EMI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
            Principal Interest : $1000
            </div>
            <div>
              Fee : $200
            </div>
            <div>
              Total : $1200
            </div>
            <div style={{textAlign:"center"}}>
            <Button variant="outlined" onClick={async (e)=>{
              let phone_number=window.sessionStorage.getItem("phone_number");
              let res = await getRequest(api_2(phone_number));
              if (res.data.state){
              navigate("/loanapprove")
              }
              else{
                setOpenDia(true);
              }
            }}> Select </Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
            </div>

            <div className='acc-compo'>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>12 Months EMI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
            Principal Interest : $1000
            </div>
            <div>
              Fee : $200
            </div>
            <div>
              Total : $1200
            </div>
            <div style={{textAlign:"center"}}>
            <Button variant="outlined" onClick={async (e)=>{
              let phone_number=window.sessionStorage.getItem("phone_number");
              let res = await getRequest(api_2(phone_number));
              if (res.data.state){
              navigate("/loanapprove")
              }
              else{
                setOpenDia(true);
              }
            }}> Select </Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
            </div>
      
          </div>
          </div>
        </Container>
        <Dialog
        open={openDia}
        onClose={()=>{
          setOpenDia(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Some phishing detected"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Some Suspious activity detected so processing this request to IVR.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            navigate("/");
          }}>Disagree</Button>
          <Button onClick={()=>{
          navigate("/loanapprove");
          }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
    </div>
  )
}
