import React, {Component} from 'react';

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
        {
          this.state.users.map(users => (
            <h1 key={ users.id }> { users.first_name + " " + users.last_name } </h1>
          ))
        }
      </div>
    );
  } 
}
export default App;
