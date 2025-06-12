import React from 'react'
import Header from "../../components/Header/Header2";
import Footer2 from '../../components/Footer/Footer2'
import AboutUser from '../../components/AboutMe/AboutUser'

const AboutMe = () => {
  return (
   <div className="bg-green-400 relative flex-col flex justify-center items-center">
      <Header/>
    
      <AboutUser/>
      <Footer2/>
    </div>
  )
}

export default AboutMe