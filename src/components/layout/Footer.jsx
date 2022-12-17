import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Food Online Order</h2>
        <p>We try to give the best possible food in Town.</p>
        <br />
        <em>Willing to give attention to genuine feedback</em>
        <strong>All right reserved @coderjannat</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com/">
          <AiFillInstagram />
        </a>
        <a href="https://www.youtube.com/">
          <AiFillYoutube />
        </a>
        <a href="https://www.youtube.com/">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
