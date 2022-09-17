import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/avatar-3.svg";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
export const Home = () => {
  return (
    <section className="home container">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Nguyen Thai Gia Long</h1>
        <span className="home__education">
          I'm a intern Front-end developer
        </span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
