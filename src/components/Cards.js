import React from 'react';
import './Cards.css';
import Hub from "../images/hub.png";
import Gpt from "../images/gpt.png";
import Gym from "../images/gym.png";
import Hu from "../images/login.png";
import CardItem from './CardItem';
import { Button } from 'react-bootstrap';

function Cards() {
  return (
    <div className="cards">
      <h1>Students Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Button>
              <a
                href="https://jman-movie-app.vercel.app/"
                rel="noopener"
                target="_blank"
              >
                VIEW
              </a>
            </Button>
            <CardItem
              src={Hub}
              text="This is a fully functional and responsive movie trailer and search app"
              label="Movie Hub"
            />
            <Button>
              <a
                href="https://jman-fitclub.vercel.app/"
                rel="noopener"
                target="_blank"
              >
                VIEW
              </a>
            </Button>
            <CardItem
              src={Gym}
              text="This a completed gym website"
              label="Website"
            />
          </ul>
          <ul className="cards__items">
            <Button>
              <a
                href="https://portfolio-web-tau.vercel.app/"
                rel="noopener"
                target="_blank"
              >
                VIEW
              </a>
            </Button>
            <CardItem src={Gpt} text="Porfolio Website" label="Website" />
            <Button>
              <a
                href="https://signin-ruddy.vercel.app"
                rel="noopener"
                target="_blank"
              >
                VIEW
              </a>
            </Button>
            <CardItem
              src={Hu}
              text="A fully responsive and active login-page liked to firebase"
              label="Login/Signup"
            />
            <Button>
              <a
                href="https://jman-movie-app.vercel.app/"
                rel="noopener"
                target="_blank"
              >
                VIEW
              </a>
            </Button>
            <CardItem
              src={Hub}
              text="This is a fully functional and responsive movie trailer and search app"
              label="Hub"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
