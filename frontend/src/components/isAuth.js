import React from 'react';
import { Link } from 'react-router-dom';

export default class IsAuth extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false
        }
    };

    renderLoginButton(){
        const token = sessionStorage.getItem('token');
        
        if (token){
            this.setState.isLogin = true;
            return (<div>
                 <li><Link to="/myaccount"><i className="fas fa-user-alt" id='icon'> MY ACCOUNT</i></Link></li>
            <li><Link to="/logout"><i className="fas fa-user" id='icon'> LOGOUT</i></Link></li>
           </div> )
        } else{
            return (<li><Link to="/login"><i className="fas fa-user" id='icon'> LOGIN</i></Link></li>)
        }
    }
    render(){
        return(
            <div>{this.renderLoginButton()}</div>
        )
    }

}