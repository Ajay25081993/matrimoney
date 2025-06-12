import React from 'react'
import HobbyInterest from '../../components/Hobbies/HobbyInterest'
import Header from "../../components/Header/Header2";
import Footer2 from "../../components/Footer/Footer2";
const Hobby = () => {
  return (
    <div className="bg-green-400 relative flex-col flex justify-center items-center">
      <Header />
      <HobbyInterest/>
      
      <Footer2 />
    </div>
  )
}

export default Hobby