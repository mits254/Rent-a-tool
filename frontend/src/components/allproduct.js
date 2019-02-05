import React, {Component }from 'react';
import ProductListing from '../features/product-listings';
import { Link } from 'react-router-dom';


export default class AllProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input :''
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    updateInputValue(e){
        this.setState({
            input: e.target.value
          });
    }

    onFormSubmit(e) {
        e.preventDefault();
      };
    render(){
    console.log(this.state.input)
    return (<div>
        <form onSubmit={this.onFormSubmit} className="search-container1">
    <input type="text" id="search-bar" placeholder="ex -  drill, hammer.." value={this.state.input} 
    onChange={this.updateInputValue}/>
    <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
        </form>
        <div className='allproduct'>  
                <ProductListing name = {this.state.input}/>
        </div>
        
    </div>)};
};