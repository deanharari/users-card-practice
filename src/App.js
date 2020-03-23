import React, {Component} from 'react';

import { Cardlist } from './components/card-list.component';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      users: [],
    }
  }  

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(users => this.setState({users:users.data})) 
  }



  render() {

    return (
      <div className="App">
        <input 
          type="search"
          placeholder="search user"
          onChange={(e => this.setState({searchFilter:e.target.value}))}
        /> 
        <Cardlist users= {this.state.users}/>
      </div>
    );
  } 
}
export default App;
