import React from 'react';
import _ from 'lodash';

import MagnifyIcon from 'mdi-react/MagnifyIcon';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.predictionBuilder = this.predictionBuilder.bind(this);
    this.keyboardAutocomplete = this.keyboardAutocomplete.bind(this);
    this.autocompleteListDecorator = this.autocompleteListDecorator.bind(this);
    this.autocompleteServiceListener = this.autocompleteServiceListener.bind(this);
    this.initGooglePlacesAutocomplete = this.initGooglePlacesAutocomplete.bind(this);
    this.displayPredictionSuggestions = this.displayPredictionSuggestions.bind(this);
    this.autocompleteKeyboardListener = this.autocompleteKeyboardListener.bind(this);
    this.upKeyAutocompleteInteraction = this.upKeyAutocompleteInteraction.bind(this);
    this.downKeyAutocompleteInteraction = this.downKeyAutocompleteInteraction.bind(this);
    this.state = {
      autocompleteFormFieldValue: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchBar = document.getElementById('search-bar-input');
    this.setState({ autocompleteFormFieldValue: searchBar.innerHTML });
  }

  handleSearch(e) {
    if (this.props.searchSpots) {
      this.props.searchSpots(this.state.autocompleteFormFieldValue, null, document.getElementById('search-bar-input'));
    }
  }

  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    const googleComponentsInit = [{
        googleComponent: 'sublocality_level_1',
        id: 'city-address-field'
      }, {
        googleComponent: 'locality',
        id: 'city-address-field'
      }, {
        googleComponent: 'administrative_area_level_1',
        id: 'state-address-field'
      }, {
        googleComponent: 'postal_code',
        id: 'postal-code-address-field'
    }];

    const autocompleteFormField = document.getElementById('search-bar-input');

    this.initGooglePlacesAutocomplete(autocompleteFormField);
  }

  initGooglePlacesAutocomplete(autocompleteFormField) {
    const autocomplete = new google.maps.places.AutocompleteService();
    const predictionList = this.predictionListMarkup();

// NOTE: Edited 81, 82. "autocompleteFormField.parent() not a function" error.

    const formFieldParent = autocompleteFormField.parentElement;
    document.getElementById(formFieldParent.id).appendChild(predictionList);
    autocompleteFormField.addEventListener('input', () => {
      if (autocompleteFormField.value) {
        predictionList.style.display = 'block';
        autocomplete.getPlacePredictions({
          input: autocompleteFormField.value,
          types: ['geocode']},
          (predictions, status) => {
            this.displayPredictionSuggestions(predictions, status, predictionList, autocompleteFormField);
          }
        );
      } else {
        predictionList.style.display = 'none';
      }
    });
  }

  predictionListMarkup() {
    const predictionsWrapperDiv = document.createElement('ul');

    predictionsWrapperDiv.classList.add('pac-container', 'pac-logo');
    if (this.props.formProps && this.props.formProps.match.path === '/new') {
      predictionsWrapperDiv.classList.add('new-spot-pac');
    }
    return predictionsWrapperDiv;
  }
  displayPredictionSuggestions(predictions, status, predictionList, autocompleteFormField) {
        debugger
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      predictionList.style.display = 'none';
      return;
    }

// NOTE: Added followinglines 16 to dynamically remove dud predictions
    const currentQuery = autocompleteFormField.value;
    predictions.filter((prediction) => (prediction.description.includes(currentQuery)));
    const queryMatchDescriptions = predictions.map(prediction => prediction.description);
    predictionList.childNodes.forEach((child) => {
      if (!queryMatchDescriptions.includes(child.innerHTML)) {
        predictionList.removeChild(child);
      }
    });
    for (const prediction of predictions) {
      this.predictionBuilder(prediction, predictionList, autocompleteFormField);
    }
    this.autocompleteKeyboardListener(predictions, predictionList, autocompleteFormField);
  }

  predictionBuilder(prediction, predictionList, autocompleteFormField) {
    const predictionListItem = document.createElement('li');
    predictionListItem.classList.add('pac-item');

    predictionListItem.appendChild(document.createTextNode(prediction.description));
    predictionListItem.addEventListener('click', () => {
      this.autocompleteServiceListener(prediction, predictionList, autocompleteFormField);
    });

// NOTE: Added this to remove duplicate predictions
    const currentPredictions = Array.from(predictionList.children).map(child => child.innerHTML);
    if (!currentPredictions.includes(prediction.description)) {
      predictionList.appendChild(predictionListItem);
    }
  }

  autocompleteServiceListener(prediction, predictionList, autocompleteFormField) {
    const service = new google.maps.places.PlacesService(autocompleteFormField);
    service.getDetails({
      placeId: prediction.place_id,
    }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        if (place.types[0] === 'street_address') {
          this.fillInAddress(place, autocompleteFormField);
        } else {
          autocompleteFormField.value = prediction.description;
          predictionList.style.display = 'none';
        }
      }
    });
  }

  fillInAddress(place, autocompleteFormField) {
    autocompleteFormField.value = place.formatted_address;
    predictionList.style.display = 'none';
  }

  autocompleteKeyboardListener(predictions, predictionList, autocompleteFormField) {
    const autocompletePredictionMarkup = document.querySelector('.pac-container');
    this.keyCodeListener = (event) => {
      switch (event.keyCode) {
        case 38: // UP
          this.upKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField);
          break;
        case 40: // DOWN
          this.downKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField);
          break;
        case 9: // TAB
          this.keyboardAutocomplete(predictions, predictionList, autocompleteFormField, this.keyCodeListener);
          break;
        case 13: // ENTER
          this.keyboardAutocomplete(predictions, predictionList, autocompleteFormField, this.keyCodeListener);
          autocompletePredictionMarkup.style.display = 'none';
          break;
      }
    };
    autocompleteFormField.addEventListener('keydown', this.keyCodeListener);
  }

  upKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField) {
    if (!(document.querySelector('.pac-selected'))) {
      return this.autocompleteListDecorator(autocompletePredictionMarkup.lastChild, autocompleteFormField);
    } else {
      const previousSibling = document.querySelector('.pac-selected').previousSibling;

      if (previousSibling) {
        this.autocompleteListDecorator(previousSibling, autocompleteFormField);
      } else {
        this.autocompleteListDecorator(autocompletePredictionMarkup.lastChild, autocompleteFormField);
      }
    }
  }

  downKeyAutocompleteInteraction(autocompletePredictionMarkup, autocompleteFormField) {
    if (!(document.querySelector('.pac-selected'))) {
      return this.autocompleteListDecorator(autocompletePredictionMarkup.firstChild, autocompleteFormField);
    } else {
      const nextSibling = document.querySelector('.pac-selected').nextSibling;
      // debugger
      // const selected = document.querySelector('.pac-selected');
      // const nextIndex = Array.from(autocompletePredictionMarkup.childNodes).indexOf(selected)
      // const nextSibling = Array.from(autocompletePredictionMarkup.childNodes)[nextIndex]
      if (nextSibling) {
        this.autocompleteListDecorator(nextSibling, autocompleteFormField);
      } else {
        this.autocompleteListDecorator(autocompletePredictionMarkup.firstChild, autocompleteFormField);
      }
    }
  }

  autocompleteListDecorator(autocompletePredictionMarkup, autocompleteFormField) {
    if (document.querySelector('.pac-selected')) {
      document.querySelector('.pac-selected').classList.remove('pac-selected');
    }
    autocompleteFormField.value = autocompletePredictionMarkup.innerHTML;
    autocompletePredictionMarkup.classList.add('pac-selected');
  }

  keyboardAutocomplete(predictions, predictionList, autocompleteFormField, keyCodeListener) {
    if (document.querySelector('.pac-selected')) {
      for (const prediction of predictions) {
        if (document.querySelector('.pac-selected').innerHTML === prediction.description) {
          this.autocompleteServiceListener(prediction, predictionList, autocompleteFormField);
        }
      }
      const selectedResult = document.querySelector('.pac-selected')

      document.querySelector('.pac-selected').classList.remove('pac-selected');
      autocompleteFormField.removeEventListener('keydown', keyCodeListener);
      this.setState({
        autocompleteFormFieldValue: selectedResult,
      });
    }
  }

  render() {
    return (
      <div id="search-with-results-wrapper">
        <div id="search-bar-wrapper" className="search-bar">
          <MagnifyIcon className="search-bar-icon mdi-48px"/>
            <input
              id="search-bar-input"
              className="search-input"
              type="search"
              onChange={this.handleSearch}
              placeholder="Search"
              autoComplete="off"
            />
        </div>
      </div>
    )
  }
}

export default SearchBar;
