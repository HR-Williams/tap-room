import { v4 } from 'uuid';
import React from "react";
import PropTypes from "prop-types";

function NewKegForm(props) {

    return (
      <React.Fragment>
        <form onSubmit={handleNewKegFormSubmission}>
          <input
            type='text'
            name='bevType'
            placeholder='Beverage Type' />
          <input
            type='text'
            name='name'
            placeholder='Batch Name' />
          <input
            type='number'
            step='0.01'
            name='price'
            placeholder='Price per pour' />
          <input
            type='number'
            step='0.01'
            name='alcoholContent' placeholder='% Alcohol Content' />
          <button type='submit'></button>
        </form>
      </React.Fragment>  
    );
    function handleNewKegFormSubmission(event) {
      event.preventDefault();
      console.log(event.target.bevType.value);
      console.log(event.target.name.value);
      console.log(event.target.price.value);
      console.log(event.target.alcoholContent.value);
      const floatPrice = parseFloat(event.target.price.value)
      const floatAlcContent= parseFloat(event.target.alcoholContent.value)
      props.onNewKegCreation({bevType: event.target.bevType.value, name: event.target.name.value, price: floatPrice, alcoholContent: floatAlcContent, id: v4()})
  };
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;