import React from "react";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Facebook />
        <Twitter />
        <LinkedIn />
        <GitHub />
      </div>
      <p>&copy; moeenchanna.com</p>
    </div>
  );
}

export default Footer;
