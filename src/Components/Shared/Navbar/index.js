import React,{useState} from 'react'
import {AppBar,Container,IconButton,Drawer,Toolbar,Typography,Avatar,Menu,MenuItem,ListItemIcon,Divider} from "@mui/material";
import {Logout,SupervisedUserCircle,HomeMaxOutlined,Notifications,History} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Image from "../../../assets/ZestLogo.png";
// import { fetchAvatar } from "../../const";
export default function Index() {
    const [open,setOpen]=useState(false);
    const [El,setEl]=useState(null);
    const navigate = useNavigate();
    
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
        <MenuItem onClick={()=>{
          navigate("/home");
        }}> <ListItemIcon><HomeMaxOutlined /></ListItemIcon> Home</MenuItem>
        <Divider />
        <MenuItem onClick={()=>{
          navigate("/profile");
        }}> <ListItemIcon><SupervisedUserCircle /></ListItemIcon> Profile</MenuItem>
        <Divider />
        <MenuItem onClick={()=>{
        window.localStorage.removeItem("user_token");
        navigate("/");
        }}> <ListItemIcon><Logout /></ListItemIcon>  Logout</MenuItem>
      </Menu>
             </AppBar>  
        </>
    )
}