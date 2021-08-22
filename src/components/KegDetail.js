import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  function handleSellButton() {
    const newPints = keg.pints -=1;
    props.onClickingSell({bevType: keg.bevType, name: keg.name, pints: newPints,price: keg.price, alcoholContent: keg.alcoholContent, id: keg.id})    
  }

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - {keg.bevType}</h3>
      <h4>{keg.alcoholContent}% alc.</h4>
      <h4>${keg.price} per pour</h4>
      <p>pints left: {keg.pints}</p>
      <button disabled={keg.pints === 0 ? true : false} onClick={handleSellButton}>sell pint</button>
      <br /><br />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell: PropTypes.func
};

export default KegDetail;
