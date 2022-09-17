import React from 'react';

import Header from '../../components/Header';
import Programs from "../../components/Programs";
import Testimony from '../../components/Testimony';
import Values from "../../components/Values";
import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <Testimony />
      {/* <Footer/> */}
      
    </>
  );
}
export default Home