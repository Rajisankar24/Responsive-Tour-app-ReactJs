import React, { useState } from "react";
import "./Tours.css";
import { ImMap } from "react-icons/im";
const Tours = ({ myData }) => {
  return (
    <section>
      <div className="tours-container">
        {myData.map((items, index) => {
          const { image, imgtext, heading, para, place, duration, price } =
            items;
          return (
            <div key={index}>
              <div className="box">
                <div className="img-div">
                  <img src={image} alt={place} className="img-class" />
                  <div className="side">{imgtext}</div>
                </div>
                <h3>{heading}</h3>
                <p className="para">{para}</p>
                <div className="sub">
                  <p>
                    <ImMap />
                    {place}
                  </p>
                  <p>{duration} Days</p>
                  <p>{price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
