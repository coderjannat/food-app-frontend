import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";

const Contact = () => {
  const options = {
    initial: {
      x: "-100vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.2,
    },
  };

  const formOptions = {
    initial: {
      x: "100vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.2,
    },
  };

  const imageOptions = {
    initial: {
      x: "50%",
      y: "-100vh",
      opacity: 0,
    },
    animate: {
      x: "50%",
      y: "-50%",
      opacity: 1,
    },
    transition: {
      delay: 1,
    },
  };

  return (
    <section className="contact">
      <motion.form {...options}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message....." cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>

      <motion.div {...formOptions} className="formBorder">
        <motion.div {...imageOptions} >
          <img src={burger} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
