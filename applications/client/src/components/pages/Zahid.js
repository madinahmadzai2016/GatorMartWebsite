import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'react-bootstrap/Image';
import myphoto from '../../images/zahid sayed.jpg'
import { faFacebook, faSquareGit, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import zayedlogo from '../../images/zayedlogo.svg'

export default function Zahid() {
  return (
    <>
      {/* <h1 className='zayed1'>ZayedTech</h1> */}
      <h1 className='zayed'><Image src={zayedlogo} style={{
        display: "flex",
        margin: 0,
        width: 150,
        height: 100,
        borderRadius: 400 / 2

      }}
      />
    
        <Image src={myphoto} roundedCircle alt='something' style={{
          display: "flex",
          marginLeft: "55%",
          marginTop: "0%",
          marginRight: "25%",
          width: 400,
          height: 400,
          borderRadius: 400 / 2

        }}

        />
        <div className='zayed-box-text'><p style={{ marginTop: 25 }}>Zayed Sayed</p></div>
        <div className='zayed-box-text'><p style={{ marginTop: 250 }}>Github Master: A master of github where we “Build software better, together".</p></div>
        <div className='zayed-box'><p style={{ lineHeight: 1.2, marginLeft: 30 }}>Hello and Welcome to my page. This is the landing page for our new team project. Please check out the page and explore our project!</p></div>

        <div class="social-container">
          <div className='zayed-icons d-flex'>
            <a href="https://www.youtube.com" className="youtube social"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://facebook.com " className="facebook social"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://github.com" className="github social"><FontAwesomeIcon icon={faSquareGit} /></a>
            <a href="https://instagram.com" className="instagram social"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </h1>
    </>
  );
}
