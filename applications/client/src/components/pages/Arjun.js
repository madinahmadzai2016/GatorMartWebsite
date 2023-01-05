import React from "react";
import Image from "react-bootstrap/esm/Image";
import "../Arjun.css";
import myphoto from "../../images/mypic.jpg";

export default function Arjun() {
  return (
    <>
      <div class="wrapper">
        <span>
          <Image
            src={myphoto}
            roundedCircle
            alt="something"
            style={{
              display: "flex",
              position: "center",
              marginLeft: "690px",
              marginTop: "0px",
              height: "330px",
              width: "310px",
            }}
          />
        </span>
        <article>
        <h1 style={{lineHeight : 0.5, marginLeft: 30, marginTop:30 }}> Arjun Sharma</h1>
          <h3 style={{lineHeight : 2, marginLeft: 30,}}>Scrum Master</h3>
          
          <blockquote>
            <br></br>
            <br></br>
            Hello Everyone. My name is Arjun Sharma and my role for the project
            is a scrum master. I'm persuing my bachelors degree in computer
            science. I'm very enthusiastic, motivated and detail oriented student
            seeking into cybersecurity skills and building some experience. 
          </blockquote>
        </article>
      </div>
    </>
  );
}
