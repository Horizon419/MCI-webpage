import React from 'react'
import Programs from '../../components/Programs'
import './services.css'
import Headers from '../../components/Headers'
import Mcc from '../../images/1.jpg'

const Services = () => {
  return (
    <>
      <Headers title="Our Services" image={Mcc}>
        We revolutionize your approach to life by transforming your MINDS SET.
        Our single GOAL is to change train, the YOUNG PEOPLE, to a better
        citizen and a successful individual.
      </Headers>
      <Programs />
    </>
  );
}
export default Services