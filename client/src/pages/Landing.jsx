import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Message from "../components/Message/Message";
import Record from "../components/Record/Record";
import Hero2 from "../components/Hero/Hero2";
import Elite from "../components/Success/SuccessStory";
import UpperPart from "../components/Upper/UpperPart";
import Middle from "../components/Middle/Middle";
import Login from "./Login/Login";
import { useState } from "react";
import SuccessStory from "../components/Success/SuccessStory";
import Footer from "../components/Footer/Footer";
import Register from "./Register/Register";
const Landing = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div className="">
      <UpperPart
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
      <Middle showRegister={showRegister} setShowRegister={setShowRegister} />
      <SuccessStory />
      <Footer showRegister={showRegister} setShowRegister={setShowRegister} />
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
      <Register showRegister={showRegister} setShowRegister={setShowRegister} />
      {/* <Hero /> */}
      {/* <Message />
      <Record />
      <Hero2/>
      <Elite/> */}
    </div>
  );
};

export default Landing;
