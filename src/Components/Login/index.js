import React,{useState,useEffect} from 'react'
import {Grid,TextField,Button,Typography,ThemeProvider, formLabelClasses,InputAdornment} from "@mui/material";
import {Login,VerifiedUser,PhoneRounded} from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/Zest_logo_green.png";
import { postRequest } from "../../Service/api_calls";
import { api_1 } from "../../const/apis_endpoints";
// import { MoonLoader,HashLoader,PuffLoader} from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
    const [details,setDetails] = useState({});
    const [loading,setLoading]=useState(false)
    const [error,setErrors]=useState(false);
    const [phone_number,setPhoneNumber]=useState("");
    useEffect(()=>{
        var token = window.localStorage.getItem("user_token");
        if (token!==null){
            navigate("/home");
        }
    },[])
    return (
        <div>
              <ThemeProvider theme={theme}>
              <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
            <Grid container justifyContent={"center"} spacing={2} style={{marginTop:"10%"}}>
                <Grid item xs={6} >
                    <div style={{textAlign:'center'}}>
                    {/* {loading?<div style={{marginBottom:"6%",display:"flex",flexDirection:"row",justifyContent:'center'}}>
                             <PuffLoader color={"#2196f3"} /> <br></br></div>:<img src={Logo} height={100}></img>} */}
                    {/* <Typography variant="h4" style={{color:"#2196f3",fontWeight:"bold"}}>AlgoBucket</Typography> */}
                    <img src={Image}></img>
                    </div>
                  

                </Grid>
               
            </Grid>
            <Grid container justifyContent={"center"} spacing={2} style={{marginTop:"1%"}}>
                <Grid item xs={11} md={4}>
                    <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneRounded  color={"primary"} />
            </InputAdornment>
          ),
        }} disabled={error} error={error} fullWidth variant="standard" label="Phone Number" type="text" value={phone_number} onChange={(e)=>{
                   console.log(e.target.value,e.target.value.length,phone_number.length);
          if (phone_number.length<10)
                      setPhoneNumber(e.target.value);
                    else if (phone_number.length===10){
                      if (e.target.value.length<10){
                        setPhoneNumber(e.target.value);
                      }
                    }
                     
                   }}>

                    </TextField>

                </Grid>
                
            </Grid>
            
            
            <div style={{textAlign:"center" , marginTop:"1%"}}>
                <Button variant="contained" style={{width:"100px",}}  disabled={loading} onClick={async (e)=>{
                  async function getLocation() {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition( async (pos)=>{
                        await postRequest(api_1,{phone:phone_number,latitude:pos.coords.latitude,longitude:pos.coords.longitude})
                        window.sessionStorage.setItem("phone_number",phone_number);
                        navigate("/product");
                      });
                      
                    } else { 
                      await postRequest(api_1,{phone:phone_number})
                      window.sessionStorage.setItem("phone_number",phone_number);
                      navigate("/product");
                    }
                  }
                  try{
                  await getLocation();
                  
                
                  }
                  catch(e){
                    console.log(e);
                  }
// setLoading(true)
// try{
//     // console.log(details)
// // var res = await postRequest(LoginApi(),{password:details.password,email:details.email})
// var res={status:200,data:{auth_token:"csd",username:"cdsjknvs"}}
// console.log(res);
// if (res.status===400){
//     throw new Error("User Not Exist")
// }

// setLoading(false)
// toast.success('Logged In.... Please wait', {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     });
//     window.localStorage.setItem("user_token",res.data.auth_token);
//     window.localStorage.setItem("username",res.data.username);
//     setTimeout(()=>{
//     navigate("/home");
//     },1000)
// }

// catch(e){
//     setLoading(false)
//     // console.log(e.response)
//     toast.error(e.response.data.message, {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });
// }
                }}> Login</Button>
            </div>
           
            </ThemeProvider>
        </div>
    )
}