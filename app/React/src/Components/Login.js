import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class login extends Component {
    render() {
        return (
            <div>
                <form className="col-4" onSubmit={(e) => e.currentTarget.value}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            aria-describedby="username"
                            onChange={(e) => this.handleDetails(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            aria-describedby="password"
                            onChange={(e) => this.handleDetails(e)}
                        />
                    </div>
                    <p>If you don't have an account yet, you can create your account <Link to="/auth/signup"> here</Link> </p>
                </form>
                <h2>Hello!!</h2>
                <h2>Welcome to IronProfile</h2>
                <p>If you sing up, ou agree with all our terms and conditions where we can do whatever we want with data</p>
                <button type="submit" className="btn btn-primary">Create the Account</button>
            </div>
        )
    }
}
