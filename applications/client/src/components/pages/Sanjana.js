import React from 'react';
import Image from 'react-bootstrap/Image';
import myphoto from '../../images/photo1.jpeg'

export default function Sanjana() {
  
  return (
    <>
  
    <span><Image src={myphoto} roundedCircle alt='something' style={{
            display: "flex",
            marginLeft:"590px",
            marginTop:"50px",
            height: "285px",
            width: "285px",
            }}/> </span> <i>
            <h2 style={{lineHeight : 1.8, marginLeft: 30, marginTop:20 }}>G SANJANA</h2>
      <h3 style={{lineHeight : 1.85, marginLeft: 30 }}><i>Team Lead</i></h3>
      <p style={{lineHeight : 1.65, marginLeft: 30 }} className='float_column'>Hello everyone! I'm Sanjana, and I'm the team lead for this project. After graduating from college with a degree in computer science, I decided to pursue a Master's in computer science as well to further fuel my passion for coding and AI innovations. During my free time I love to read books, watch paleontology documentaries, roam around the city and cook/invent new recipes.<br></br><br></br><b>EMAIL :</b> gsanjana97@gmail.com</p>
      <p style={{lineHeight : 1.65, marginLeft: 280}} className='float_column'><b>SKILLS :</b> HTML, CSS, JAVASCRIPT, PYTHON, SQL, JAVA, C, C++ </p>
  </i>
    </>
  );
}