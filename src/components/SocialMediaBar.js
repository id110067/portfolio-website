import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function SocialMediaBar() {
  return (
    <>
      <a href="https://github.com/id110067" target="_blank">
        <BsGithub
          style={{
            marginBottom: "15%",
            height: "25px",
            width: "25px",
            color: "#B2B2B2",
          }}
        />
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/mohammadabdurrahman/"
        target="_blank"
      >
        <BsLinkedin
          style={{
            marginBottom: "15%",
            height: "25px",
            width: "25px",
            color: "#B2B2B2",
          }}
        />
      </a>
      <br />
      <a href="https://www.facebook.com/abdur8606" target="_blank">
        <BsFacebook
          style={{
            marginBottom: "15%",
            height: "25px",
            width: "25px",
            color: "#B2B2B2",
          }}
        />
      </a>
      <br />
      <a href="https://www.instagram.com/abdur8606/" target="_blank">
        <BsInstagram
          style={{
            marginBottom: "15%",
            height: "25px",
            width: "25px",
            color: "#B2B2B2",
          }}
        />
      </a>
      <br />
      <BsEnvelopeFill
        style={{ height: "25px", width: "25px", color: "#B2B2B2" }}
      />
    </>
  );
}

export default SocialMediaBar;
