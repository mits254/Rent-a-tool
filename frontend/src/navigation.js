import React from 'react';
import { Link } from 'react-router-dom';
import IsAuth from './components/isAuth';

const Navigation = (props) => {
    return (<div >
        <div className="container-view">
            <div className="role-line">
                <h1> RENT A TOOL</h1>
                <div className="role">
                </div>
                <i className="fas fa-paint-roller push"></i>
            </div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <nav id='menu'>
                <ul>
                    <li><Link to="/"><i className="fas fa-home" id='icon'> HOME</i></Link></li>
                    <li><div className="container-2">
                        <span className="icon"><i className="fas fa-search" id='icon'> SEARCH</i></span>
                        <input type="search" id="search" placeholder="Search..." className='search-input'/>
                    </div></li>
                    <li><Link to="/cart"><i className="fas fa-briefcase" id='icon'> CART</i></Link></li>
                    <IsAuth />
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </div>
    </div>);
};

export default Navigation;
