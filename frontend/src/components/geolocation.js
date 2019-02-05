import React, { Component } from 'react';
/* global google */
import Autocomplete from 'react-google-autocomplete';
import { Link } from 'react-router-dom';



export default class GeoLocation extends Component {
    constructor(props) {
        super(props);
        this.state={
            place : {}
        }
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
         this.setState ({place : this.autocomplete.getPlace()})    
      }
      

render(){ 
    let place_1 = this.state.place.formatted_address;
    console.log(place_1);
    return (
        <div className='geolocation'>
            <h1 className='h1location'>YOUR LOCATION ?? </h1>
            <input ref={this.autocompleteInput}
            placeholder='your city...' className='geoClass' type='text'></input>
            <Link className='geobtn' to={{ pathname:'/', state :{place : `${place_1}`}} }> Check</Link>
            
        </div>
    )
    }
}

