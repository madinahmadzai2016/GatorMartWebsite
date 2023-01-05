import React from "react";
import Image from "react-bootstrap/esm/Image";

import myphoto from "../../images/sanket_pic.jpg";

export default function Sanket() {
  return (
    <>
      <div class="wrapper">
        <span>
          <Image
            src={myphoto}
            roundedCircle
            alt="something"
            style={{
              position: "center",
              marginLeft: "30px",
	      marginTop:"30px", 
              height: "330px",
              width: "330px",
            }}
          />
        </span>
        <article style={{ marginLeft: 50, marginTop: 20 }}>
          
          <p style={{fontSize: 30}}>Back-end</p>
          <p style={{fontSize: 30}}>Sanket Shah</p>
          <p>
            <br></br>
            <br></br>
            Hello Everyone. My name is Sanket Shah and my role for the project
            is back end developer. I'm a grad student at SFSU majoting in
            Computer Science. During my undergrad, I've primarily worked on
            Artificial Intelligence and during my grad studies and future, I
            intend to pursue the same.
          </p>
        </article>
      </div>
    </>
  );
}
