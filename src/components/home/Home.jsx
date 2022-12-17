import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const optionOne = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  const optionTwo = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: { delay: 0.4 },
  };

  return (
    <>
     <section className="home">
      <div>
        <motion.h1 {...optionOne}>online resturant</motion.h1>
        <motion.p {...optionOne} transition={{ delay: 0.2 }}>
          Give a try!!!
        </motion.p>
      </div>
      <motion.a {...optionTwo} href="#menu">
        Explore Items
      </motion.a>
    </section>

    <Founder/>
    <Menu />
    </>
   
  );
};

export default Home;
