import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import me from "../../assets/founder.webp";
import { MdDashboard } from "react-icons/md";

const Profile = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  // /////////////
  const orderOptions = {
    initial: {
      x: "-100bw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="User" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Jannatul
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            to="/admin/dashboard"
            style={{ borderRadius: 0, backgroundColor: "rgb(40, 40, 40)" }}
          >
            <MdDashboard />
            Dashboard
          </Link>
        </motion.div>
        <motion.div {...orderOptions}>
          <Link to="/myorders">Orders</Link>
        </motion.div>
        <motion.button {...orderOptions} transition={{ delay: 0.3 }}>
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
