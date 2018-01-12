
























//
//
//
//
//
//
// initAutocomplete() {
//   const googleComponents = [{
//       googleComponent: `sublocality_level_1`,
//       id: `city-address-field`
//     }, {
//       googleComponent: `locality`,
//       id: `city-address-field`
//     }, {
//       googleComponent: `administrative_area_level_1`,
//       id: `state-address-field`
//     }, {
//       googleComponent: `postal_code`,
//       id: `postal-code-address-field`
//   }];
//
//   const autocompleteFormField = document.getElementById(`search-bar-input`);
//
//   this.initGooglePlacesAutocomplete(autocompleteFormField);
// }
//
// initGooglePlacesAutocomplete(autocompleteFormField) {
//   const autocomplete = new google.maps.places.AutocompleteService();
//   const predictionList = this.predictionListMarkup();
//   const predictionList = this.predictionListMarkup();
//   document.getElementById(autocompleteFormField.parent()).appendChild(predictionList);
//
//   autocompleteFormField.addEventListener(`input`, () => {
//     if (autocompleteFormField.value) {
//       predictionList.style.display = `block`;
//       autocomplete.getPlacePredictions({
//         input: autocompleteFormField.value,
//         types: [`geocode`]},
//         (predictions, status) => {
//           this.displayPredictionSuggestions(predictions, status, predictionsList, autocompleteFormField);
//           this.displayPredictionSuggestions(predictions, status, predictionsList, autocompleteFormField);
//         }
//       );
//     } else {
//       predictionList.style.display = `none`;
//     }
//   });
// }
//
// predictionListMarkup() {
//   const predictionsWrapperDiv = document.createElement(`ul`);
//   predictionsWrapperDiv.classList.add(`pac-container`, `pac-logo`);
//   return predictionsWrapperDiv;
// }
//
// displayPredictionSuggestions(predictions, status, predictionList, autocompleteFormField) {
//   if (status !== google.maps.places.PlacesServiceStatus.OK) {
//     predictionList.style.display = `none`;
//     return;
//   }
//   for (const prediction of predictions) {
//     this.predictionBuilder(prediction, predictionList, autocompleteFormField);
//     this.predictionBuilder(prediction, predictionList, autocompleteFormField);
//   }
//   this.autocompleteKeyboardListener(predictions, predictionList, autocompleteFormField);
//   this.autocompleteKeyboardListener(predictions, predictionList, autocompleteFormField);
// }
//
// predictionBuilder(prediction, predictionList, autocompleteFormField) {
//   const predictionListItem = document.createElement(`li`);
//   predictionListItem.classList.add(`pac-item`);
//
// predictionListItem.appendChild(document.createTextNode(prediction.description));
//   predictionListItem.addEventListener(`click`, () => {
//     this.autocompleteServiceListener(prediction, predictionList, autocompleteFormField);
//     this.autocompleteServiceListener(prediction, predictionList, autocompleteFormField);
//   });
//   predictionList.appendChild(predictionListItem);
// }
//
// autocompleteServiceListener(prediction, predictionList, autocompleteFormField) {
//   const service = new google.maps.places.PlacesService(autocompleteFormField);
//   service.getDetails({
//     placeId: prediction.place_id,
//   }, (place, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       if (place.types[0] === `street_address`) {
//         this.fillInAddress(place, autocompleteFormField);
//         this.fillInAddress(place, autocompleteFormField);
//       } else {
//         autocompleteFormField.value = prediction.terms[0].value;
//         predicitonList.style.display = `none`;
//       }
//     }
//   });
// }
//
// autocompleteKeyboardListener(predictions, predictionList, autocompleteFormField) {
//   const autocompletePredictionMarkup = document.querySelector(`.pac-container`);
//   this.keyCodeListener = (event) => {
//   this.keyCodeListener = (event) => {
//     switch (event.keyCode) {
//       case 38: // UP
//         this.upKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField);
//         this.upKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField);
//         break;
//       case 40: // DOWN
//         this.downKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField);
//         this.downKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField);
//         break;
//       case 9: // TAB
//         this.keyboardAutocomplete(predictions, predictionList, autocompleteFormField, this.keyCodeListener);
//         this.keyboardAutocomplete(predictions, predictionList, autocompleteFormField, this.keyCodeListener);
//         break;
//       case 13: // ENTER
//         this.keyboardAutocomplete(predictions, predictionList, autocompleteFormField, this.keyCodeListener);
//         this.keyboardAutocomplete(predictions, predictionList, autocompleteFormField, this.keyCodeListener);
//         break;
//     }
//   };
//   autocompleteFormField.addEventListener(`keydown`, this.keyCodeListener);
//   autocompleteFormField.addEventListener(`keydown`, this.keyCodeListener);
// }
//
// upKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField) {
//   if (!(document.querySelector(`.pac-selected`))) {
//     return this.autocompleteListDecorator(autocompletePredictionMarkup.lastChild, autocompleteFormField);
//     return this.autocompleteListDecorator(autocompletePredictionMarkup.lastChild, autocompleteFormField);
//   } else {
//     const previousSibling = document.querySelector(`.pac-selected`).previousSibling;
//
//     if (previousSibling) {
//       this.autocompleteListDecorator(previousSibling, autocompleteFormField);
//       this.autocompleteListDecorator(previousSibling, autocompleteFormField);
//     } else {
//       this.autocompleteListDecorator(autocompletePredictionMarkup.lastChild, autocompleteFormField);
//       this.autocompleteListDecorator(autocompletePredictionMarkup.lastChild, autocompleteFormField);
//     }
//   }
// }
//
// downKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField) {
//   if (!(document.querySelector(`.pac-selected`))) {
//     return this.autocompleteListDecorator(autocompletePredictionMarkup.firstChild, autocompleteFormField);
//     return this.autocompleteListDecorator(autocompletePredictionMarkup.firstChild, autocompleteFormField);
//   } else {
//     const nextSibling = document.querySelector(`.pac-selected`).nextSibling;
//     if (nextSibling) {
//       this.autocompleteListDecorator(nextSibling, autocompleteFormField);
//       this.autocompleteListDecorator(nextSibling, autocompleteFormField);
//     } else {
//       this.autocompleteListDecorator(autocompletePredictionMarkup.firstChild, autocompleteFormField);
//       this.autocompleteListDecorator(autocompletePredictionMarkup.firstChild, autocompleteFormField);
//     }
//   }
// }
//
// autocompleteListDecorator(autocompletePredictionMarkup, autocompleteFormField) {
//   if (document.querySelector(`.pac-selected`)) {
//     document.querySelector(`.pac-selected`).classList.remove(`pac-selected`);
//   }
//   autocompleteFormField.value = autocompletePredictionMarkup.innerHTML;
//   autocompletePredictionMarkup.classList.add(`pac-selected`);
// }
//
// keyboardAutocomplete(predictions, predictionList, autocompleteFormField, keyCodeListener) {
//   if (document.querySelector(`.pac-selected`).innerHTML) {
//     for (const prediction of predictions) {
//       if (document.querySelector(`.pac-selected`).innerHTML === prediction.description) {
//         this.autocompleteServiceListener(prediction, predictionList, autocompleteFormField);
//         this.autocompleteServiceListener(prediction, predictionList, autocompleteFormField);
//       }
//     }
//     document.querySelector(`.pac-selected`).classList.remove(`pac-selected`);
//     autocompleteFormField.removeEventListener(`keydown`, keyCodeListener);
//   }
// }
//
// this.initGooglePlacesAutocomplete
// this.displayPredictionSuggestions
// this.predictionBuilder
// this.autocompleteKeyboardListener
// this.autocompleteServiceListener
// this.fillInAddress
// this.keyCodeListener
// this.upKeyAutocompleteInteraction
// this.downKeyAutocompleteInteraction
// this.keyboardAutocomplete
// this.autocompleteListDecorator
//
//
//
//
//
//   //
//   // configAutocomplete() {
//   //   // const googleComponents = [{
//   //   //     googleComponent: `sublocality_level_1`,
//   //   //     id: `city-address-field`
//   //   //   }, {
//   //   //     googleComponent: `locality`,
//   //   //     id: `city-address-field`
//   //   //   }, {
//   //   //     googleComponent: `administrative_area_level_1`,
//   //   //     id: `state-address-field`
//   //   //   }, {
//   //   //     googleComponent: `postal_code`,
//   //   //     id: `postal-code-address-field`
//   //   // }];
//   //   // const opt = this.state.autocompleteOptions;
//   //   // const opt = this.state.autocompleteOptions;
//   //
//   //   // TODO: Figure out how to interpolate the values down in autocomplete & autocompleteFormField.
//   //   const autocompleteFormField =  document.getElementById('search-bar-input');
//   //   const autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
//   //     types: [`address`],
//   //     componentRestrictions: { 'country': ['us'] },
//   //   });
//   //   const { googleComponents } = this.state.googleComponents;
//   //
//   //   google.maps.event.clearInstanceListeners(autocompleteFormField);
//   //   google.maps.event.addListener(autocomplete, 'place_changed', () => {
//   //     const place = autocomplete.getPlace();
//   //     autocompleteFormField.value = place.name;
//   //     for (const component in googleComponents) {
//   //       const addressComponents = place.address_components;
//   //       addressComponents.forEach( addressComponent => populateFormElements(addressComponent, googleComponents[component]));
//   //     }
//   //   });
//   // }
//   //
//   // initAutocomplete() {
//   //   this.configAutocomplete();
//   // }
//   //
//   // populateFormElements(addressComponent, formMap) {
//   //   const addressType = addressComponent.types[0];
//   //   if (formMap.googleComponent === addressType) {
//   //     const formValue = addressComponent.long_name;
//   //     document.getElementById(formMap.id).value = formValue;
//   //   }
//   //
//   // }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React from 'react';
// // import React from 'react';
// //
// // import merge from 'lodash/merge';
// // import MagnifyIcon from 'mdi-react/MagnifyIcon';
// //
// // class SearchBar extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleSearch = this.handleSearch.bind(this);
// //     this.initAutocomplete = this.initAutocomplete.bind(this);
// //     this.configAutocomplete = this.configAutocomplete.bind(this);
// //     this.populateFormElements = this.populateFormElements.bind(this);
// //   }
// //
// //   handleSearch(e) {
// //     if (this.props.searchSpots) {
// //       this.props.searchSpots(e.target.value);
// //     }
// //   }
// //
//   // componentDidMount() {
//   //   this.initAutocomplete();
//   // }
//   //
//   // initAutocomplete(options) {
//   //   const defaults = Object.freeze({
//   //     inputId: `search-bar-input`,
//   //     addressType: `country`,
//   //     restrictions: { country: [`us`] }
//   //   })
//   //   options = merge({}, defaults, options);
//   //
//   //   const googleComponents = [{
//   //     googleComponent: `sublocality_level_1`,
//   //     id: `city-address-field`
//   //   }, {
//   //     googleComponent: `locality`,
//   //     id: `city-address-field`
//   //   }, {
//   //     googleComponent: `administrative_area_level_1`,
//   //     id: `state-address-field`
//   //   }, {
//   //     googleComponent: `postal_code`,
//   //     id: `postal-code-address-field`
//   //   }];
//   //
//   //   const autocompleteFormField =  document.getElementById(`search-bar-input`);
//   //   const autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
//   //     types: ['country'],
//   //     componentRestrictions: { 'country': ['us'] },
//   //   });
//   //
//   //   google.maps.event.clearInstanceListeners(autocompleteFormField);
//   //   google.maps.event.addListener(autocomplete, 'place_changed', () => {
//   //     const place = autocomplete.getPlace();
//   //     return place
//   //   });
//   //   // this.configAutocomplete(options);
//   // }
//   //
//   // configAutocomplete(options) {
//   // }
//   //
//   //
//   // populateFormElements(addressComponent, formMap) {
//   //   const addressType = addressComponent.types[0];
//   //   if (formMap.googleComponent === addressType) {
//   //     const formValue = addressComponent.long_name;
//   //     document.getElementById(formMap.id).value = formValue;
//   //   }
//   // }
// //
// //   render() {
// //     return (
// //       <div className="search-bar">
// //
// //         <MagnifyIcon className="search-bar-icon mdi-48px"/>
// //         <input
// //           id="search-bar-input"
// //           className="search-input"
// //           type="search"
// //           onChange={this.handleSearch}
// //           placeholder="Search"
// //         />
// //       </div>
// //     )
// //   }
// // }
// //
// // export default SearchBar;
//
// //
// //
// // import React from 'react';
// //
// // import MagnifyIcon from 'mdi-react/MagnifyIcon';
// //
// // class SearchBar extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleSearch = this.handleSearch.bind(this);
// //     this.initAutocomplete = this.initAutocomplete.bind(this);
// //     this.populateFormElements = this.populateFormElements.bind(this);
// //   }
// //
// //   handleSearch(e) {
// //     if (this.props.searchSpots) {
// //       this.props.searchSpots(e.target.value);
// //     }
// //   }
// //
// //   componentDidMount() {
// //     this.initAutocomplete();
// //   }
// //
// //   initAutocomplete() {
// //     const googleComponents = [{
// //         googleComponent: `sublocality_level_1`,
// //         id: `city-address-field`
// //       }, {
// //         googleComponent: `locality`,
// //         id: `city-address-field`
// //       }, {
// //         googleComponent: `administrative_area_level_1`,
// //         id: `state-address-field`
// //       }, {
// //         googleComponent: `postal_code`,
// //         id: `postal-code-address-field`
// //     }];
// //     const autocompleteFormField =  document.getElementById('search-bar-input');
// //     const autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
// //       types: [`address`],
// //       componentRestrictions: { 'country': ['us'] },
// //     });
// //
// //     google.maps.event.clearInstanceListeners(autocompleteFormField);
// //     google.maps.event.addListener(autocomplete, 'place_changed', () => {
// //       const place = autocomplete.getPlace();
// //       console.log(place);
// //     });
// //
// //
// //   }
// //
// //   populateFormElements(addressComponent, formMap) {
// //     const addressType = addressComponent.types[0];
// //     if (formMap.googleComponent === addressType) {
// //       const formValue = addressComponent.long_name;
// //       document.getElementById(formMap.id).value = formValue;
// //     }
// //   }
// //
// //   render() {
// //     return (
// //       <div className="search-bar">
// //
// //         <MagnifyIcon className="search-bar-icon mdi-48px"/>
// //         <input
// //           id="search-bar-input"
// //           className="search-input"
// //           type="search"
// //           onChange={this.handleSearch}
// //           placeholder="Search"
// //         />
// //       </div>
// //     )
// //   }
// // }
// //
// // export default SearchBar;
