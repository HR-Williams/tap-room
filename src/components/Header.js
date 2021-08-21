import React from "react";
import champagneImage from "./../img/champagne.jpg"

function Header(){
  return (
    <React.Fragment>
      <h1>Ferment Collective Tap Room</h1>
      <img src={champagneImage} alt="An image of jelly jar with champagne next to a candle" />
      <p>In house application to track inventory of our house-made fermented drinks on tap. We sell unique house-made wines, champagnes and kombuchas, sourced from home grown and locally foraged ingredients</p>
    </React.Fragment>
  );
}

export default Header;
