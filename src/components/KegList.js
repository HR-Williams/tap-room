import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.kegList.map((keg) =>
      <Keg
        whenKegClicked = { props.onKegSelection } 
        bevType={keg.bevType}
        name={keg.name}
        alcoholContent={keg.alcoholContent}
        price={keg.price}
        id={keg.id}
        key={keg.id}/>
    )}
  </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;

