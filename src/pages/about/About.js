import React from 'react';
import './about.css'
import Headers from '../../components/Headers';
import Mci from '../../images/about.jpg'
import Mci1 from '../../images/dnm.jpg'
import Daddy from '../../images/daddy.jpg'
import Mummy from '../../images/mummy.png'

const About = () => {
  return (
    <>
      <Headers title="About Us" image={Mci}>
        MASTER’S CARE INTERNATIONAL (MCI), is a legally registered NGO
        (Non-Governmental Organization) with the Corporate Affair Commission,
        (CAC), of Nigeria, with Registration No: 67767, in 2014.
      </Headers>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={Mci1} alt="group" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              MASTER’S CARE INTERNATIONAL from time to time reach out to young
              people, especially students (Primary school, Secondary school and
              Tertiary Institutions), to teach them some Core Values of Life
              like: Honesty, Hard work, Creativity, Importance of Knowledge, How
              to Startup a Business, Civic Duties as a Citizen. And to let them
              know how they can live a meaningful, prosperous and successful
              lives. And how to become a responsible Citizen and contribute to
              the national development.
            </p>
            <p>
              We organize Seminars, Workshops, Talents show, Sport event, Skill
              Acquisition and Community Service Projects. This could sometimes
              be done in collaboration with other NGOs and partners.
            </p>
            <p>
              HISTORY MAKER NETWORK is the training arm or department of MCI.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Our Vision is to see communities and societies where young people
              have a sense of direction and confidently pursue their passions,
              dreams and goals EARLY in life.
            </p>
            <p>
              To see a transformed MINDS SET Leaders ruling the WORLD to make a
              difference.
            </p>
          </div>
          <div className="about__section-image">
            <img src={Daddy} alt="groups" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={Mummy} alt="groups" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our Mission is to serve as a platform for demonstrating love
              through sharing and caring for youth and other target groups.
              Bringing People of Greatness together, who are ready to influence
              nations, no excuse leaders, goal getters, those that maximize
              TIME, those that believe in possibilities, LEADERS, DREAMERS and
              Visionary, who takes Responsibility for their lives.
            </p>
            <p>
              ......We will be able to create and collaborate positively, to
              Rule the WORLD
            </p>
            <p>Get out of your HEAD and get into your GREATNESS.</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default About