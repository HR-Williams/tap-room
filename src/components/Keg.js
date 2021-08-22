import React from "react";
import PropTypes from "prop-types";


function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.bevType}</h3>
        <p>{props.alcoholContent}% alc.</p>
        <p>price per serving: ${props.price}</p>
      </div>
      
    </React.Fragment>
  );
}

export default Keg;

Keg.propTypes = {
  bevType: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};
