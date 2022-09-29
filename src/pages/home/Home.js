import React from 'react';

import Header from '../../components/Header';
import Imageslides from '../../components/Imageslides';
import Programs from "../../components/Programs";
import Testimony from '../../components/Testimony';
import Values from "../../components/Values";
import './home.css'

const Home = () => {
  return (
    <>
      <Imageslides />
      <Header />
      <Programs />
      <Values />
      <Testimony />
      {/* <Footer/> */}
    </>
  );
}

export default Home