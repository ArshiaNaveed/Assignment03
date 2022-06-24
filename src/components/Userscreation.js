import React, { Component } from "react";
import jpeg1 from "../assets/images/1jpeg.jpeg";
import jpg2 from "../assets/images/2.jpg";
import jpg3 from "../assets/images/3.jpg";
import jpg4 from "../assets/images/4.jpg";
import jpg5 from "../assets/images/5.jpg";
import jpg12 from "../assets/images/12.jpg";
import jpg17 from "../assets/images/17.webp";
import imgage from "../assets/images/images.jpg";
import start from "../assets/images/d.jpg";
import bg1 from "../assets/images/bg1.webp";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.webp";
import bg4 from "../assets/images/f.webp";
import bg5 from "../assets/images/ss.jpg";

export class Userscreation extends Component {
  onbtnoneclick() {
    document.body.style.backgroundImage = `url(${bg1})`;
  }
  onbtnwoclick() {
    document.body.style.backgroundImage = `url(${bg2})`;
  }
  onbtnthreeclick() {
    document.body.style.backgroundImage = `url(${bg3})`;
  }
  onbtnfourclick() {
    document.body.style.backgroundImage = `url(${bg4})`;
  }
  onbtnfiveclick() {
    document.body.style.backgroundImage = `url(${bg5})`;
  }
  
  render() {
    return (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            paddingBottom: "60px",
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div>
            <p
              style={{
                textDecoration: "underline",
                color: "black ",
                textDecorationColor: "orangered",
                fontSize: "40px",
                fontFamily: "Franklin Gothic Medium",
              }}
            >
              Our User's Creations
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={jpeg1} alt="" />
            <img src={jpg2} alt="" />
            <img src={jpg3} alt="" />
            <img src={jpg4} alt="" />
            <img src={jpg5} alt="" />
            <img src={jpg12} alt="" />
            <img src={jpg17} alt="" />
            <img src={imgage} alt="" />
          </div>
        </div>
        <center>
          <img id="end" src={start} alt="" />
          <br />
          <br />
          <p style={{ fontSize: "30px", fontFamily: " Georgia" }}>
            Click Below to change the background of this website
          </p>
          <button
            id="btnYellow"
            onClick={() => this.onbtnoneclick()}
            type="submit"
          >
            H
          </button>
          <button
            id="btnPink"
            onClick={() => this.onbtnwoclick()}
            type="submit"
          >
            G
          </button>
          <button
            id="btn3Blue"
            onClick={() => this.onbtnthreeclick()}
            type="submit"
          >
            I
          </button>
          <button
            id="btn4Green"
            onClick={() => this.onbtnfourclick()}
            type="submit"
          >
            O
          </button>
          <button
            id="btn4Purple"
            onClick={() => this.onbtnfiveclick()}
            type="submit"
          >
            L
          </button>
        </center>
      </div>
    );
  }
}

export default Userscreation;
