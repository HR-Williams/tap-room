import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.kegList.map((keg, index) =>
      <Keg bevType={keg.bevType}
        name={keg.name}
        alcoholContent={keg.alcoholContent}
        price={keg.price}
        key={index}/>
    )}
  </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;

