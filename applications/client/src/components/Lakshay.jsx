import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import myImage from '../images/IMG_0671.jpeg';
import github from '../images/github.png'
import instagram from '../images/insta.png'
import linkedin from '../images/linkedin .png'
import Carousel from 'react-bootstrap/Carousel';
import './Lakshay.css'
import naru1 from '../images/naru1.jpg';
import naru2 from '../images/naru2.jpg';
import naru3 from '../images/naru3.jpg';
import naru4 from '../images/naru4.jpg';
import naru5 from '../images/naru5.jpg';
import naru6 from '../images/naru6.jpg';
import naru7 from '../images/naru7.png';
import naru8 from '../images/naru8.jpg';
import naru9 from '../images/naru9.png';
import naru10 from '../images/naru10.jpg';
import naru11 from '../images/naru11.jpg';
import naru12 from '../images/naru12.jpg';
import naru13 from '../images/naru13.png';
import naru14 from '../images/naru14.png';



function Lakshay(){
return (<div >
     
    <Container style={{backgroundColor:"#f2f2f2"}}>
    <Row><Col><Image style = {{width:"70%",height:"auto",marginTop: '5%', borderRadius:"50%",marginLeft:"10%"}}src={myImage} roundedCircle></Image></Col>
    <Col><h1 style={{marginLeft:"10%",marginRight:"8%",marginTop: '10%',marginBottom: '15%',fontSize: '3em',fontFamily: 'Myriad Pro Regular'}}>Lakshay Mittal</h1><h4 style={{marginTop:"-14%", marginLeft:"20%",marginRight:"10%" ,marginBottom:"15%"}}>Backend Lead</h4></Col></Row>
    <Row>
    <Col style={{marginTop:"2%",marginLeft:"12.5%"}}><a href="https://github.com/mittallakshayy"><Image src={github} style = {{width:"15%",height:"auto",marginTop: '20px',}}></Image></a><a href="https://www.linkedin.com/in/mittallakshayy/"><Image src={linkedin} style = {{width:"15%",height:"auto",marginTop: '22px',marginRight:"2%",marginLeft:"2%"}}></Image></a>
    <a href="https://www.instagram.com/mittallakshayy/"><Image src={instagram} style = {{width:"14%",height:"auto",marginTop: '22px',}}></Image></a></Col>
    <Col style={{marginRight: '10%',marginBottom: '5%', marginTop:"-7%"}}><i>Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.</i></Col>
    </Row>
    <Row> <Col style={{marginLeft:"12%",marginRight:"12%"}}>
        <div className="container1">
            <h1 className="title-text"> Skill Marker (%)</h1>

            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="myTooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="myTooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="myTooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="myTooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="myTooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ExpressJS</span>
                <div className="skill-bar">
                    <span className="skill-per expressjs">
                        <span className="myTooltip">85%</span>
                    </span>
                </div>
            </div> <div className="skill-box">
                <span className="title">AWS</span>
                <div className="skill-bar">
                    <span className="skill-per aws">
                        <span className="myTooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">MongoDB</span>
                <div className="skill-bar">
                    <span className="skill-per mongo">
                        <span className="myTooltip">60%</span>
                    </span>
                </div>
            </div>
        </div>
        </Col>
        </Row>
        <Carousel fade style={{marginTop:"5%"}}>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru1}
          alt="First slide"
        />
         <Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru2}
          alt="Second slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru3}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru4}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru5}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru6}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru7}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru8}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru9}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru10}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru11}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru12}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru13}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={naru14}
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>While you're here, Look how amazing Naruto is.....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </Container></div>);
}
export default Lakshay;
