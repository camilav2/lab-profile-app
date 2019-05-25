import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Upload from './Components/Upload';
import Edit from './Components/Edit';
import Logout from './Components/Logout';
import LoggedIn from './Components/LoggedIn';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	};
  }

  render() {
  return (
    <div className="App">
      	<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={SignUp} />
            <Route path="/auth/upload" component={Upload} />
            <Route path="/auth/edit" component={Edit} />
            <Route path="/auth/logout" component={Logout} />
            <Route path="/auth/loggedin" component={LoggedIn} />
				</Switch>
    </div>
  );
}
}

export default App;
