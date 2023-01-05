import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  LoginSignUpInfo,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { NavbarModalContext } from "../contexts/NavbarModalContext";

const Alert = React.forwardRef(function Alert(props, ref) {

  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function LoginForm(props) {
  const {handleCloseModal} = useContext(NavbarModalContext);
  const { switchToSignup } = useContext(AccountContext);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const displaySnackBar = (messageType, message) => {
    setMessageType(messageType);
    setMessage(message);
    setOpen(true);
 };
  const handleSubmit = async (e) => {
    const emailRe = /\S+@sfsu.edu/ 
    e.preventDefault();
    try{  if(emailRe.test(email) && (password)&& (email)){
      
      const result = await axios.post('http://localhost:4000/api/login',{
        email:email,
        password:password
      });
      if(result.data.status === 'success'){
        sessionStorage.setItem('token',result.data.user);
        sessionStorage.setItem('user_id',result.data.user_id);
        sessionStorage.setItem('fullname',result.data.fullname);
        sessionStorage.setItem('profile_url',result.data.profile_url);
        displaySnackBar(result.data.status, result.data.message);
        props.setUser(result.data.user_id);
        setTimeout(handleCloseModal,2000);
      }else{
        displaySnackBar(result.data.status, result.data.message);
      }
  
     
    }else{
      displaySnackBar('error','Invalid entries');
    
    }
  } catch(err){
    displaySnackBar('error',err.response.data);

  }
  
  }
  
  return (
    <div>
      <BoxContainer>
    <FormContainer>
      <Input type="email" placeholder="SFSU Email" errorMessage= "It should be a valid email address!" onChange={(e)=> setEmail(e.target.value)} required />
      <Input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required/>
    </FormContainer>
    <Marginer direction="vertical" margin={10} />
    <MutedLink href="#">Forget your password?</MutedLink>
    <Marginer direction="vertical" margin="1.6em" />
    <SubmitButton type="submit" onClick={handleSubmit}>Login</SubmitButton>
    <Marginer direction="vertical" margin="1em" />
    <LoginSignUpInfo >
      Don't have an account?
      <BoldLink href="#" onClick={switchToSignup}>
        <b>Sign up</b>
      </BoldLink></LoginSignUpInfo>
    
  </BoxContainer>
   <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}anchorOrigin={{ vertical:'bottom', horizontal:'center' }}>
   <Alert onClose={handleClose} severity={messageType} sx={{ width: '100%' }}>
     {message}
   </Alert>
 </Snackbar>
 </div>
  );
}