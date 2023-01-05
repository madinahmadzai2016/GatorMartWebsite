import React from 'react';
import Image from 'react-bootstrap/Image';
import myphoto from '../../images/dinesh.jpg'

export default function Dinesh() {

    return (
        <>

            <h1 className='dinesh'><Image src={myphoto} roundedCircle alt='something' style={{
                display: "flex",
                marginLeft: "530px",
                marginTop: "0px",
                height: "285px",
                width: "285px"
            }}
            />
                <h1 style={{ lineHeight: 1.8, marginLeft: 30, marginTop: 30 }}> Dinesh Arunraj</h1>
                <h3 style={{ lineHeight: 2, marginLeft: 30 }}>Frontend</h3>
                <div className='dinesh-text'><p style={{ lineHeight: 1.75, marginLeft: 30 }}>Hello everyone! I'm Dinesh Arunraj, and I'm the frontend developer for this project. After graduating from college with a degree in computer science engineering, I decided to pursue a Master's in computer science as well to further fuel my passion for coding and AI innovations. .</p>
                </div>
            </h1>

        </>

    );
}
