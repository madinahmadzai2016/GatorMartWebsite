import React from 'react';
import Image from 'react-bootstrap/Image';
import myphoto from '../../images/MadinaA.jpg'

export default function Madina() {

    return (
        <>
        <div className='container'>
            <h1 className='madina'><Image src={myphoto} alt='something' style={{
                    display: "flex",
                    marginLeft: "530px",
                    marginTop: "0px",
                    height: "285px",
                    width: "285px"
                }}
                />
                <h1 style={{ lineHeight: 1.8, marginLeft: 30, marginTop: 30, textAlign: 'center' }}>Madina Ahmadzai</h1>
                <h3 style={{ lineHeight: 2, marginLeft: 30,  textAlign: 'center' }}>Front End Lead</h3>
                <div className='madina-box'>
                    <p style={{ lineHeight: 1.75, textAlign: 'center'}}>Hello everyone! Welcome to our project... This is  Madina Ahmadzai, and I'm the Frontend lead for this project.A motivated, adaptable responsible Computing graduate from Los Medanos College. Hoping to graduate with my Bachelor degree of science in computer science, I have chosen this field due the fact that i have been interested to have a career in which i could work from home. I love traveling, cooking, watching movies and playing cricket. Thank you for experienceing our page!.</p>
                </div>
                </h1>
        </div>
        </>

    );
}
