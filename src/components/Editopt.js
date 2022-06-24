import React, { Component } from "react";
import remove from "../assets/images/remove.PNG";

const Editopt = () => {
  function defaultBtn() {
    const img = document.querySelector("img");
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const result = reader.result;
        img.src = result;
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "10px",
        paddingBottom: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "rgb(121, 168, 170)",
        fontSize: "27px",
        fontFamily: "Segoe UI",
      }}
    >
      <div>
        <img
          src={remove}
          alt=""
          style={{ width: "9em", border: "solid", margin: "30px" }}
          id="target-image"
        />
      </div>
      <div>
        <center>
          <p style={{ fontFamily: "Lucida Sans", marginTop: "60px" }}>
            Remove the background of Image
          </p>
          <div className="container" style={{ marginTop: "0px" }}>
            <div id="cancel-btn">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
          </div>
          <input
            onChange={function (e) {
              const file = e.target.files[0];

              const img = document.getElementById("target-image");
              if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                  const result = reader.result;
                  img.src = result;
                };
                reader.readAsDataURL(file);
              }
            }}
            id="default-btn"
            type="file"
            style={{
              backgroundColor: "orangered",
              border: "solid 5px",
              width: "160px",
            }}
          />
        </center>
      </div>
    </div>
  );
};

export default Editopt;
