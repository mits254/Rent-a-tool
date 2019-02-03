import React, { Component } from 'react';
import Router from './Router';


const isAuthen = sessionStorage.getItem('token');
const Navigation = (props) => <div >
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
        <li><a href="/"><i className="fas fa-home" id='icon'> HOME</i></a></li>
        <li><div className="container-2">
          <span className="icon"><i className="fas fa-search" id='icon'> SEARCH</i></span>
          <input type="search" id="search" placeholder="Search..." />
        </div></li>
        <li><a href="/add"><i className="fas fa-concierge-bell" id='icon'> Add product</i></a></li>
        <li><a href="/cart"><i className="fas fa-briefcase" id='icon'> CART</i></a></li>
        {
          isAuthen ?
             <li><a href="/logout"><i className="fas fa-user" id='icon'> LOGOUT</i></a></li>
           :
             <li><a href="/login"><i className="fas fa-user" id='icon'> LOGIN</i></a></li>
        }   
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span></span>
    </label>
  </div>
</div>

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Router />    
      </div>
    );
  }
}

export default App;
