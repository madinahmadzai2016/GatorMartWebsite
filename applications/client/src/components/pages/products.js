import React,{useEffect,useState,useRef,useCallback}from 'react';
import Button from '@mui/material/Button';
import './productdetails.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ThumbnailDetails from '../ThumbnailDetails';
import { color } from '@mui/system';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';




function ProductInfo(props) {
  const [item, setItem] = useState( { product_name:"",
    description: "", 
    product_type: "", 
   isDonation: "",
   isCampusPickup: "",
   pickup_addr: "",
   listedBy: "",
   isSold: "",
   img_url:[],
   price:""}
      
    );
    const [author, setAuthor] = useState({name:'',
    profile_url:'',
    
    });
    const [index, setIndex] = useState(0); 
    const {productId} = useParams();
    const nextTab = index => {
    setIndex(index);
  };
  const getProductData = async () =>{
    
    
    const productResponse = await axios.post('http://localhost:4000/api/product',{productId:productId});
    setItem(productResponse.data)
    if(props.user !== null){
      if(props.user === productResponse.data.listedBy){
        const name = sessionStorage.getItem('fullname');
        const profile_url = sessionStorage.getItem('profile_url');
        setAuthor((prev)=>{
          return {...prev, name ,profile_url};
        });
        
      }else{
        const userResponse = await axios.post('http://localhost:4000/api/userinfo',{userId:productResponse.data.listedBy});
        setAuthor(userResponse.data);
       
      }
    } else{const userResponse = await axios.post('http://localhost:4000/api/userinfo',{userId:productResponse.data.listedBy});
    setAuthor(userResponse.data);
   

    }
   
  }
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    getProductData();
    
    
  },[]);
  return (
    <div className="app">
      
          <div className="details" key={item._id}>
            <Link to ='/'><i className="fa-solid fa-arrow-left" aria-hidden="true" style={{fontSize:'29px', marginTop:'17px',color:'black'}}></i></Link>
            <div className="big-img">
              <img src={item.img_url[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              <ThumbnailDetails images={item.img_url} tab={nextTab}  />
                <p><b>Product Name: </b>{item.product_name}</p>
                <p><b>Price: </b>${item.price}</p>
                <p><b>Description: </b>{item.description}</p>
                <p><b>Pickup Address: </b>{item.pickup_addr}</p>
                
                
                <div><b>Listed by:  </b><Avatar src={author.profile_url}  sx={{ width: 50, height: 50 }}/>{author.name}</div>
                 </div>
                 <div style={{marginBottom:'10px'}}>
               
                  {item.isDonation && <Chip label="Donation" size='small' color="success"style={{marginRight:'6px',marginTop:'6px'}} />}
                  {item.isCampusPickup && <Chip label="On Campus" size='small' color="success"style={{background:'#76eab6',marginRight:'6px',marginTop:'6px'}} /> }
                  <Chip label={item.product_type} size='small' color="primary" style={{marginTop:'6px'}} /></div>
                 <div className="row">
                  { props.user !== item.listedBy? <Button style={{borderRadius:'20px',borderWidth:'2px',fontWeight:'bold',backgroundColor:'black'}} variant="contained">Contact Seller</Button>:<></>}
            </div></div>
          </div>
      
    </div>
  )
}


export default ProductInfo;