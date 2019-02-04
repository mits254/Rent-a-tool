import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import { Redirect } from 'react-router-dom';



let Parent = createReactClass({
    getInitialState: function () {
        return { signup: false, login: true }
    },
    switch(word) {
        var signup, login;
        if (word === "signup") { signup = true; login = false; }
        else { login = true; signup = false; }
        return this.setState({ login: login, signup: signup })

    },
    render: function () {

        var self = this;
        return (
            <div className='login-container'>
                <div id="buttons">
                    <p id="signupButton" onClick={self.switch.bind(null, "signup")} className={self.state.signup ? "yellow" : "blue"}>Sign Up</p>
                    <p id="loginButton" onClick={self.switch.bind(null, "login")} className={self.state.login ? "yellow" : "blue"}> Login</p>
                </div>

                {self.state.signup ? <Signup /> : null}
                {self.state.login ? <Login /> : null}

            </div>

        )


    }
})


class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
                address: '',
                city: '',
                state: '',
                phone: '',   
            },
            authenticated: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const form = {
            username: this.state.user.username,
            password: this.state.user.password,
            address: this.state.user.address,
            city: this.state.user.city,
            state: this.state.user.state,
            phone: this.state.user.phone,
        }
        const request = 'http://localhost:8000/signup';
        fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            sessionStorage.setItem('token', JSON.stringify(data));
            this.setState({ authenticated: true });
        })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const { user } = this.state;
        console.log(user);
        const isAuthenticated = this.state.authenticated;

        return (
            <div>
                {isAuthenticated ? <Redirect to={{ pathname: '/' }} /> : (
                <div id="signup">
                    <input type="text" id="first" placeholder="Username" value={this.state.username}
                        onChange={e => this.setState({ user: { ...user, username: e.target.value } })} />

                    <input type="password" id="last" placeholder="Password" value={this.state.password}
                        onChange={e => this.setState({ user: { ...user, password: e.target.value } })} />

                    <input type="text" id="address" placeholder="Address" value={this.state.address}
                        onChange={e => this.setState({ user: { ...user, address: e.target.value } })} />

                    <input type="text" id="city" placeholder="City" value={this.state.city}
                        onChange={e => this.setState({ user: { ...user, city: e.target.value } })} />

                    <input type="text" id="State" placeholder="State" value={this.state.state}
                        onChange={e => this.setState({ user: { ...user, state: e.target.value } })} />

                    <input type="integer" id="phone" placeholder="Phone" value={this.state.phone}
                        onChange={e => this.setState({ user: { ...user, phone: e.target.value } })} />

                    <button id="send" onClick={this.handleSubmit} method='POST'>Send</button>
                </div>)}
            </div>

        )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
                authenticated: '',
            }
        }
        this.handleSubmit2 = this.handleSubmit2.bind(this);

    }

    handleSubmit2(e) {
        e.preventDefault();
        const user = {
            username: this.state.user.username,
            password: this.state.user.password
        };
        //console.log(user)
        const request = 'http://localhost:8000/signin';
        fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(
                res => {
                    if (res.status !== 200) {
                        alert('Please enter the valid Username/Password')
                    } else {
                        return res.json()
                    }
                }
            )
            .then(
                res => {
                    //console.log(res);
                    sessionStorage.setItem('token', JSON.stringify(res));
                    this.setState({ authenticated: true });
                }
            )
            .catch((err) => {
                alert('Please enter the valid Username')
            });
    }
    isAuthenticated() {
        const token = sessionStorage.getItem('token');
       // console.log(token)
        if (token) return true;
    }

    render() {
        const { user } = this.state;
        const isAlreadyAuthenticated = this.isAuthenticated();
        return (
            <div>
                {isAlreadyAuthenticated ? <Redirect to={{ pathname: '/' }} /> : (
                    <div id="login">
                        <input type="text" id="email" placeholder="Username" value={this.state.username}
                            onChange={e => this.setState({ user: { ...user, username: e.target.value } })} />
                        <input type="password" id="password" placeholder="Password" value={this.state.password}
                            onChange={e => this.setState({ user: { ...user, password: e.target.value } })} />
                        <button id="send" onClick={this.handleSubmit2} method='POST'>Send</button>
                    </div>
                )}


            </div>

        )
    }
}


export default Parent;