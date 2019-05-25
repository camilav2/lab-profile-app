import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
            <h1>IronProfile</h1>
            <h2> Today we will create an app with authorisation, adding some cool styles!</h2>
            <Link to='/auth/signup'>Sign Up</Link>
            <Link to='/auth/login'>Login</Link>  
            </div>
        )
    }
}
