import React, {Component} from 'react';

import './App.css';
import { Cardlist } from './components/card-list.component';

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
        <Cardlist users= {this.state.users}/>
      </div>
    );
  } 
}
export default App;
