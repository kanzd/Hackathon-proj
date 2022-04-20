import React,{useState,useEffect} from 'react'
import {AppBar,Container,IconButton,Drawer,Toolbar,Typography,Avatar,Menu,MenuItem,ListItemIcon,Divider,List,ListItem,ListItemText,ListItemAvatar } from "@mui/material";
import {Logout,SupervisedUserCircle,HomeMaxOutlined,Notifications,History} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Image from "../../../assets/ZestLogo.png";
import { getRequest } from "../../../Service/api_calls";
import { api_3 } from "../../../const/apis_endpoints";

// import { fetchAvatar } from "../../const";
export default function Index() {
    const [open,setOpen]=useState(false);
    const [El,setEl]=useState(null);
    const [details,setDetails] = useState([ {
        "id": 1,
        "customer": {
            "id": 1,
            "name": "dummy",
            "phone": "9876543210",
            "email": "dummy@gmail.com",
            "address": "dummy address",
            "createdAt": "2022-04-20T21:18:03",
            "updated_at": "2022-04-20T21:18:03"
        },
        "latitude": 123.00,
        "longitude": 987.00,
        "place":"New Delhi",
        "createdAt": "2022-04-20T16:45:15"
    }]);
    const navigate = useNavigate();
    useEffect(()=>{
        (async ()=>{
            let phone_number=window.sessionStorage.getItem("phone_number");
            let res=await getRequest(api_3(phone_number,5));
            setDetails(res);
        })();
    },[])
    return (
        <>
       
          <AppBar position='relative'><Toolbar>
              
              {/* <IconButton onClick={(e)=>{
                  setOpen(!open);
              }}><Menu style={{color:"white"}} /></IconButton> */}
              <Container style={{display:"flex",flexDirection:"column",alignItems:"center"}}> 
              <Typography variant='h5' style={{margin:"1% 0 1% 1%",fontWeight:"bold"}}><img src={Image} height={50}></img></Typography>
              <IconButton
               id="basic-button"
               aria-controls="basic-menu"
               onClick={(e)=>{
                   setOpen(true)
                  
                   setEl(e.currentTarget)
               }}
              >
                  <Avatar >
               
<History />
             </Avatar>
             </IconButton>
              
              </Container>
             </Toolbar> 
             <Menu
        id="basic-menu"
        anchorEl={El}
        open={open}
        onClose={()=>{
            setOpen(false)
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          {details.map((value,index)=>{
              return (
                <ListItem>
                <ListItemText primary={value.place} secondary={"latitude : "+value.latitude+" longitude : "+value.longitude} />
                </ListItem>
              )
          })}
        
      </Menu>
             </AppBar>  
        </>
    )
}