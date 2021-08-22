import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - {keg.bevType}</h3>
      <h4>{keg.alcoholContent}% alc.</h4>
      <h4>${keg.price} per pour</h4>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;
