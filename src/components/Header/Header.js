import React from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Logo from "../../img/icon.png";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

import "./Header.css";

export default function Header() {
  return (
    <div className="video-header">
      <h3 style={{alignItems: 'center', display:'flex'}}><ArrowBackIosIcon />Reel</h3>
      <img alt="logo" src={Logo} className="insta-logo" />
      <CameraAltIcon />
    </div>
  );
}
