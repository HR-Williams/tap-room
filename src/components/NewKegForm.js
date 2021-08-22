import { v4 } from 'uuid';
import React from "react";
import PropTypes from "prop-types";

function NewKegForm(props) {

    return (
      <React.Fragment>
        <h4>Add a New Keg to Inventory</h4>
        <form onSubmit={handleNewKegFormSubmission}>
          <input
            type='text'
            name='bevType'
            placeholder='Beverage Type' />
          <br /><br />
          <input
            type='text'
            name='name'
            placeholder='Batch Name' />
          <br /><br />
          <input
            type='number'
            step='0.01'
            name='price'
            placeholder='Price per pour' />
          <br /><br />
          <input
            type='number'
            step='0.01'
            name='alcoholContent' placeholder='% Alcohol Content' />
          <br /><br />
          <button type='submit'>Add Keg</button>
          <br /><br />
        </form>
      </React.Fragment>  
    );
    function handleNewKegFormSubmission(event) {
      event.preventDefault();
      // console.log(event.target.bevType.value);
      // console.log(event.target.name.value);
      // console.log(event.target.price.value);
      // console.log(event.target.alcoholContent.value);
      const floatPrice = parseFloat(event.target.price.value).toFixed(2)
      const floatAlcContent= parseFloat(event.target.alcoholContent.value)
      props.onNewKegCreation({bevType: event.target.bevType.value, name: event.target.name.value, price: floatPrice, alcoholContent: floatAlcContent, id: v4()})
  };
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;