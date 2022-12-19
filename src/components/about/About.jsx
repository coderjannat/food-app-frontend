import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Online Food Order</h4>
          <p>
            We provide best food with fast delivery . Understand your hunger and
            make sure to satisfy them.
          </p>
          <p>Explore the best food in the town. click below to the menu</p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Jannatul Fardous</h3>
            </div>
            <p>
              I am Jannatul Fardous, owner of this online food delivey platform
              to serve you the bert food...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
