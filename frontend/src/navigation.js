import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IsAuth from './components/isAuth';

export default class Navigation  extends Component{
    constructor(){
        super();
        this.handleHoverOn = this.handleHoverOn.bind(this);
        this.handleHoverOff = this.handleHoverOff.bind(this);
        this.state = {expand: false};
    }
    
    handleHoverOn(){
        if(this.props.hover){
            this.setState({expand: true});
        }
    }
    
    handleHoverOff(){
        if(this.props.hover){
            this.setState({expand: false});
        }
    }
    render(){
    return (<div >
        <div className="container-view">
            <div className="role-line">
                <h1> RENT A TOOL</h1>
                <div className="role">
                </div>
                <i className="fas fa-paint-roller push"></i>
            </div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"  onMouseEnter={this.handleHoverOn}
            onMouseLeave={this.handleHoverOff}/>
            <nav id='menu'>
                <ul>
                    <li><Link to="/"><i className="fas fa-home" id='icon'> HOME</i></Link></li>
                    <li className="icon"><Link to='/allproduct'>
                        <i className="fas fa-search" id='icon'> SEARCH</i></Link></li>
                    <li><Link to="/cart"><i className="fas fa-briefcase" id='icon'> CART</i></Link></li>
                    <IsAuth />
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </div>
    </div>);
    }
};


