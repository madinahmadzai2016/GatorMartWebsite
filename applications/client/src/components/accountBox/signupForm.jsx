import React, {useState, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  LoginSignUpInfo,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { NavbarModalContext } from "../contexts/NavbarModalContext";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SignupForm(props) {
  const {handleCloseModal} = useContext(NavbarModalContext);
  const { switchToSignin } = useContext(AccountContext);
  const [open, setOpen] = React.useState(false);
  const [imgPreview, setImgPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType]= useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =useState("");
  const [profileUrl, setProfileUrl] =useState("");
  const [existsProfileUrl, setExistsProfileUrl] =useState(false);

  const displaySnackBar = (messageType, message) => {
     setMessageType(messageType);
     setMessage(message);
     setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleImageChange = (e)=> {
    setProfileUrl(null);
    setExistsProfileUrl(false);
    setImgPreview(null);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ['image/png','image/jpeg','image/jpg'];
    if(selected && ALLOWED_TYPES.includes(selected.type)){
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);

      };
      reader.readAsDataURL(selected);
      setProfileUrl(selected);
      setExistsProfileUrl(true);
    }else {
      displaySnackBar('error','Please select a correct image');
    }
  };
  const handleSubmit = async (e) =>
  { try{
    
    const emailRe = /\S+@sfsu.edu/ 
    e.preventDefault();
    if(emailRe.test(email) && (fullname) && (password)&& (confirmPassword)&& (email)&&( password===confirmPassword)&&  existsProfileUrl){
      const formData = new FormData();
      formData.append('image',profileUrl);
      formData.append('fullname',fullname);
      formData.append('email',email);
      formData.append('password',password);
      
      const result = await axios.post('http://localhost:4000/api/register',formData,{headers:{'Content-Type':'multipart/form-data'}});
      if(result.data.status === 'success'){
        displaySnackBar(result.data.status, result.data.message);
        setImgPreview(null);
        setProfileUrl(null);
        setExistsProfileUrl(false);
        setTimeout(switchToSignin,2000);
      }else{
        displaySnackBar(result.data.status, result.data.message);
      }
      
    }else{
      displaySnackBar('error','Invalid form entries');
  
    }} catch(err){
      console.log(err);
      displaySnackBar('error',err.response.data);
  
    }
  };
  return (<div>
    <BoxContainer>
      {imgPreview ?  <Avatar src={imgPreview}/>
      : <PersonIcon style={{color:'#7b26c3'}}/>}
   <Marginer direction="vertical" margin=".5em" />
      <FormContainer >
     
      <Button style={{cursor:'pointer',transition:'all, 240ms ease-in-out',color:'#7b26c3'}} color='success'component="label">
        <PhotoCamera/><span>Profile Picture</span>
        <input hidden accept="image/*, png, jpeg, jpg" type="file" required onChange={handleImageChange}/>
      </Button>
    
        <Input type="text" placeholder="Full Name" required onChange={(e)=> setFullname(e.target.value)}/>
        <Input type="email" placeholder="SFSU Email" errorMessage= "It should be a valid email address!" onChange={(e)=> setEmail(e.target.value)}/>
        <Input type="password"onChange={(e)=> setPassword(e.target.value)} required placeholder="Password" />
        <Input type="password" onChange={(e)=> setConfirmPassword(e.target.value)}required placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={28} />
      <SubmitButton type="submit" onClick={handleSubmit}>Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <LoginSignUpInfo href="#">
        Already have an account?
        <BoldLink href="#" onClick={()=>{
          setImgPreview(null);
          switchToSignin();
        }}>
          <b>Sign in</b>
        </BoldLink>
      </LoginSignUpInfo>
      <Marginer direction="vertical" margin={29} />
    </BoxContainer>
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}anchorOrigin={{ vertical:'bottom', horizontal:'center' }}>
        <Alert onClose={handleClose} severity={messageType} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}