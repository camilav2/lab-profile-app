import React, { Component } from "react";
import AuthService from '../Auth/AuthService';


class SignUp extends Component {
  componentWillMount () {
    console.log(this.state)
  }
  

  authService = new AuthService();

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();

      const username = this.state.username;
      const password = this.state.password;

      this.authService.signup(username, password)
        .then(response => {
            console.log(response);
        })
      
  }
  
    render() {
        return (
            <div>
                <form className="col-4" onSubmit={(e) => this.handleSubmit(e)}>
					<div className="form-group">
						<label htmlFor="name">Username</label>
						<input
							type="text"
							className="form-control"
							name="username"
							aria-describedby="username"
							onChange={(e) => this.changeHandler(e)}
						/>
					</div>
                    <div className="form-group">
						<label htmlFor="name">Password</label>
						<input
							type="text"
							className="form-control"
							name="password"
							aria-describedby="password"
							onChange={(e) => this.changeHandler(e)}
						/>
                    <div className="form-group">
						<label htmlFor="name">Campus</label>
						<input
							type="text"
							className="form-control"
							name="campus"
							aria-describedby="campus"
							onChange={(e) => this.changeHandler(e)}
						/>
                        <div className="form-group">
						<label htmlFor="name">Course</label>
						<input
							type="text"
							className="form-control"
							name="course"
							aria-describedby="course"
							onChange={(e) => this.changeHandler(e)}
						/>
					</div>
					</div>
					</div>
                  </form>  	
                  <h2>Hello!!</h2>
                  <h2>Welcome to IronProfile</h2>
                  <p>If you sing up, ou agree with all our terms and conditions where we can do whatever we want with data</p>
                  <button type="submit" className="btn btn-primary">Create the Account</button>
            </div>
        )
    }
}

export default SignUp;