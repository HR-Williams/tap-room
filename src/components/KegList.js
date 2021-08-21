import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.kegList.map((keg, index) =>
      <Keg names={keg.name}
        location={keg.drinkType}
        issue={keg.alcoholContent}
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

