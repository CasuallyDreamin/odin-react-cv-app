import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Odin's Practice Project – Created by <span className="highlight">CasuallyDreamin</span>
      </p>
      <p>
        <a href="https://github.com/CasuallyDreamin" target="_blank" rel="noopener noreferrer">
          GitHub
        </a> | 
        <a href="https://yasin.dev" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
