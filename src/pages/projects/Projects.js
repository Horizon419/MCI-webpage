import React from 'react'
import Cards from '../../components/Cards'
import './projects.css'
import Headers from "../../components/Headers";
import Mcc from "../../images/yaa.jpg";

const Projects = () => {
  return (
    <>
      <Headers title="Students Projects" image={Mcc}>
        We revolutionize your approach to life by transforming your MINDS SET.
        Our single GOAL is to change train, the YOUNG PEOPLE, to a better
        citizen and a successful individual.
      </Headers>
      <Cards />
      <a
        href="https://forms.gle/be3mpYBT8DotbrKp8"
        className="btn lg"
        rel="noreferrer"
        target="_blank"
      >
        Register with us
      </a>
    </>
  );
}
export default Projects