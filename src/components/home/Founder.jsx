import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.webp";

const options = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

const Founder = () => {
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Jannatul Fardous</h3>
        <p>
          Hey! Everyone, I am Jannatul ferdous. A self-learner Mern Stack
          Developer.
          <br />
          My aim to serve my client with dedication.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
