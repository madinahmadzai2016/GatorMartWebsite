import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';
import logo from '../images/logo.jpg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { createTheme ,ThemeProvider} from '@mui/material/styles'
import {useState} from 'react'
import {AccountBox} from './accountBox/AccountBox.jsx';
import Box from '@mui/material/Box';
import { NavbarModalContext } from "./contexts/NavbarModalContext";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

};
function MYNavbar(props){
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const contextValue ={handleOpenModal,handleCloseModal};
  let profile_url =null;
  if(sessionStorage.getItem('profile_url')==null){
    profile_url=null;
  
}else{profile_url=sessionStorage.getItem('profile_url');}
  const theme = createTheme({
    palette: {
     
      secondary: {
 
        main: '#11cb5f',
      },
      gator: {
        main: '#6600cc',
        contrastText: '#fff',
      }
    },
    });
   
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      
      setAnchorEl(null);
    };
    const handleCloseLogout = () => {
      sessionStorage.clear();
      props.setUser(null);
      navigate('/')
      setAnchorEl(null);
    };
    const handleCloseAddProducts = () => {
      navigate('/addproducts')
      setAnchorEl(null);
    };
    const handleCloseMyProducts = () => {
      navigate('/MyItems')
      setAnchorEl(null);
    };
    const handleCloseHome = () => {
      navigate('/')
      setAnchorEl(null);
    };
return (
<NavbarModalContext.Provider value={contextValue}>
<Navbar bg="navbar navbar-light"  variant="success" expand="lg"  style={{backgroundColor: "#fff", marginLeft:'2.5rem',marginRight:'2rem'}}> 
  <Navbar.Brand href="/"><img src={logo} style={{maxWidth:'80px'}} alt='Gatormart'></img></Navbar.Brand>

    <Nav className="me-auto"> 
      </Nav>
      <ThemeProvider theme={theme}>
      
      {profile_url ? <div><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ><Avatar src={profile_url}  sx={{ width: 50, height: 50}}/></Button><Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      
      <MenuItem href='/MyItems' onClick={handleCloseMyProducts}>My Products</MenuItem>
      <MenuItem href='/addproducts' onClick={handleCloseAddProducts}>Add Products</MenuItem>
      <MenuItem href='/' onClick={handleCloseHome}>Home</MenuItem>
      <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
    </Menu></div>
      : <div><Button onClick={handleOpenModal} style={{borderRadius:'20px',borderWidth:'2px',fontWeight:'bold'}}className="nav-button"color='gator'variant="contained">Get Started</Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx ={style}> 
        <AccountBox setUser ={props.setUser}/>
        </Box>
       
      </Modal></div>}
      </ThemeProvider>
        
          

</Navbar>
</NavbarModalContext.Provider>
);

}

export default MYNavbar;
