import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Chip from '@mui/material/Chip';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';

function ProductCard(props) {


  let renderImages = props.Product.img_url?.map((val,i) =>{
   return  (
  
      <Carousel.Item key={i}>
        <img alt='product-pic'
           className="d-block w-100"
          src={val}
        />
      </Carousel.Item>
    )});

  const renderDonationChip = () => {
  
     if (props.Product.isDonation === true){
     return <Chip label="Donation" size='small' color="success"style={{marginRight:'6px',marginTop:'6px'}} />};
    
  }
  const renderCampusPickupChip = () => {
  
    if (props.Product.isCampusPickup === true){
    return <Chip label="On Campus" size='small' color="success"style={{background:'#76eab6',marginRight:'6px',marginTop:'6px'}} />};
   
 }

  return (
   
    <Card style={{ width: '14rem', borderRadius: '1%'}}>
      <Carousel interval={null}>
      {renderImages}
     </Carousel>
     <Card.Body>
       <Card.Title><h5 style={{fontSize: "17px"}}>{props.Product.product_name}</h5></Card.Title>
  
       {renderDonationChip()}
       {renderCampusPickupChip()}
      <Chip label={props.Product.product_type} size='small' color="primary" style={{marginTop:'6px'}} />
     <h6 style={{ fontSize: "15px",fontWeight:'bold', paddingTop: "1rem"}}>{`${props.Product.price}.00 USD`} </h6>
     <Link to={`/product/${props.Product._id}`}>
      <Button  variant="light" size='small'style={{ backgroundColor:"black",borderColor: "white",fontSize: "15px",background:"black",color:'white',marginRight:'10px'}}>View</Button></Link>
     {props.Product.listedBy !== props.user && <Button variant="light" size='small'style={{ backgroundColor:"black",borderColor: "white",fontSize: "15px",background:"black",color:'white'}}>Connect</Button>} 
  
     </Card.Body>
  </Card>
  )
}

export default ProductCard
