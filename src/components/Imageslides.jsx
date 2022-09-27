import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./imageslider.css";
import One from "../images/9.jpg";
import Two from "../images/Group.jpg";
import Three from "../images/10.jpg";
import Four from "../images/3.jpg";
import Five from "../images/11.jpg";
import Six from "../images/12.jpg";

const Imageslides = () => {
  return (
    <div>
      <Fade>
        <div className="each-slide">
          <div>
            <img src={One} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={Two} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={Three} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={Four} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={Five} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={Six} />
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Imageslides;
