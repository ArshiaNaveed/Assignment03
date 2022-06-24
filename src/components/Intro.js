import React, { Component } from "react";
export class Intro extends Component {
  render() {
    return (
      <div className="container">
        <center>
          <p
            style={{
              marginBottom: "4px",
              fontSize: "45px",
              color: "#333",
              fontFamily: "Verdana",
            }}
          >
            Edit Awesome Unique Pictures
          </p>
          <b>
            <p
              style={{
                animation: "animate 2s 1s forwards",
                marginTop: "0px",
                marginBottom: "7px",
                color: "orangered",
                fontSize: "40px",
                fontFamily: "sans-serif",
              }}
            >
              SUPER EASY
            </p>
          </b>
          <p style={{ fontFamily: "Georgia", color: "#333", fontSize: "18px" }}>
            PicClick frees you up for creating customized pictures on millions
            of royalty-free animations,
            <br />
            templates, backgrounds, props, stock footage, etc.
          </p>
          <br />
          <button className="btn btn-login" style={{ marginBottom: "30px" }}>
            Log In
          </button>
        </center>
      </div>
    );
  }
}

export default Intro;
