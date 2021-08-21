import React from "react";
import PropTypes from "prop-types";


function Keg(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.bevType}</h3>
      <p>{props.alcoholContent}% alc.</p>
      <p>price per serving: ${props.price}</p>
    </React.Fragment>
  );
}

export default Keg;

Keg.propTypes = {
  bevType: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
};


// As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store)