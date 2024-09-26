import React from "react";
import logo from "../../logo.svg";
import Particless from "../../components/particles";
// import Particles from "react-particles";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  return (
    <div>
      {/* <Particles /> */}
      <Particless />
      <div style={{ color: "blue" }}>test12</div>
    </div>
  );
};

export default HomePage;
