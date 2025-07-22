import React from "react";
import bannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem
          culpa quis animi! Quidem blanditiis officia nesciunt dolorem ullam
          iste cumque minus architecto ratione magnam nisi voluptas, molestias
          nemo assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur veritatis velit nulla, at harum magni adipisci
          recusandae deleniti maiores, esse tempora, illum sed illo dolorem.
          Ipsam in nihil qui nemo? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Officia, non, necessitatibus libero in, aperiam
          quisquam sint modi exercitationem deleniti reiciendis temporibus
          minima dolor reprehenderit id cumque? Commodi dolore corrupti
          deserunt.
        </p>
      </div>
    </div>
  );
};
