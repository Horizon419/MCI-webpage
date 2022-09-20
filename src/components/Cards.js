import React from 'react';
import './Cards.css';
import Hub from "../images/hub.png";
import Gpt from "../images/gpt.png";
import Gym from "../images/gym.png";
import Hu from "../images/login.png";
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Students Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            
              <CardItem
                src={Hub}
                text="This is a fully functional and responsive movie trailer and search app"
                label="Movie Hub"
                path="/projects"
              />
            
            <CardItem
              src={Gym}
              text="Porfolio Website"
              label="Website"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Gpt}
              text="This a completed gym website"
              label="Website"
              path="/projects"
            />
            <CardItem
              src={Hu}
              text="A fully responsive and active login-page liked to firebase"
              label="Login/Signup"
              a
              href="https://signin-ruddy.vercel.app"
              path="/projects"
            />
            <CardItem
              src={Hub}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
