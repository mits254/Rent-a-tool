import React, { Component } from 'react';
/* global google */
import Autocomplete from 'react-google-autocomplete';



export default class GeoLocation extends Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }
    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
            {"types": ["geocode"]});
    
        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
      }
    
      handlePlaceChanged(){
        const place = this.autocomplete.getPlace();
        console.log(place);
      }
      

render(){
    return (
        <div className='geolocation'>
            <h1 className='h1location'>YOUR LOCATION ?? </h1>
            <input ref={this.autocompleteInput}
            placeholder='your city...' className='geoClass' type='text'></input>
            <button className='geobtn'> Check</button>
            
        </div>
    )
    }
}

