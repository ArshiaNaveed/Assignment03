import React, { Component } from "react";
// import Icon from './Icon'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fafacebook,faUserCheck,faProjectDiagram,faPhone,faSailboat,faBars ,faXmark } from '@fortawesome/free-solid-svg-icons'
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer
          style={{
            backgroundColor: "orangered",
            color: "black",
            paddingBottom: "30px",
            marginTop: "20px",
          }}
        >
          <center>
            <u style={{ color: "black" }}>
              <p
                style={{
                  fontFamily: "cachin",
                  fontSize: "30px",
                  paddingTop: "50px",
                }}
              >
                PicClick
              </p>
            </u>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              saepe
              <br /> hic expedita sapiente explicabo, obcaecati maiores sunt
              sint, est, voluptatem asperiores ipsum reiciendis.
            </p>
            <center>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="fa fa-facebook"
              ></a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="fa fa-youtube"
              ></a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="fa fa-twitter"
              ></a>
              {/* <a href="https://www.youtube.com" target="_blank"><Icon icon={fafacebook } />
              </a> */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="fa fa-instagram"
              ></a>
            </center>
          </center>
        </footer>
      </div>
    );
  }
}

export default Footer;
