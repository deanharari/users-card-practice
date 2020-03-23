import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      users: [],
      searchFilter: ""
    }
  }  

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json()) 
      .then(users => this.setState({users: users})) 
  }




  render() {
    return (
      <div className="App">
      </div>
    )
  } 
}
export default App;
