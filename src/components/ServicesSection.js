import React from "react";
import home2 from "../img/home2.png";
import { IconContext } from "react-icons";
// import icons
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiDoubleDiaphragm, GiClockwork } from "react-icons/gi";
import teamwork from "../img/teamwork.svg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services{" "}
        </h2>
        <div className="cards">
          <IconContext.Provider value={{ color: "#23D997", size: "2.5em" }}>
            <div className="card">
              <div className="icon">
                <GiClockwork />
                <h3>Effecient</h3>
              </div>
              <p> Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} />
                <h3>Teamwork</h3>
              </div>
              <p> Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="card">
              <div className="icon">
                <GiDoubleDiaphragm />
                <h3>Diaphram</h3>
              </div>
              <p> Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="card">
              <div className="icon">
                <FaMoneyBillAlt />
                <h3>Affrodable</h3>
              </div>
              <p> Lorem ipsum dolor sit amet. </p>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home2" />
      </div>
    </div>
  );
};

export default ServicesSection;
