import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
const Hero = () => {
  return (
    <section>
      <div className="hero-wrapper">
        <div className="paddings innertwidth flexCenter hero-container">
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <h1>
                Discover
                <br /> More Suitable <br />
                Property
              </h1>
            </div>
            <div className="flexColStart hero-discription">
              <span className="secondaryText">Find a Variety of proprties that suit you very eaisly</span>
              <span className="secondaryText">Forget all difficulties in finding a residdence for you</span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25}/>
              <input type="text" />
              <button className="button">Search</button>
            </div>
            
          </div>

          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
