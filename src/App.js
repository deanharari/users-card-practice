import React, {Component} from 'react';

import { Cardlist } from './components/card-list.component';

import { SearchBox } from './components/search-box.component';

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
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(users => this.setState({users:users.data})) 
  }

  changeHandler = e => (
    this.setState({searchFilter:e.target.value})
  );

  render() {
    const {users, searchFilter} = this.state;
    const filteredUsersFirstName = users.filter(user => user.first_name.toLowerCase().includes(searchFilter.toLowerCase()))

    return (
      <div className="App">
        <SearchBox
          searchText="search user"
          changeHandler={this.changeHandler}
        /> 

        <Cardlist users= {filteredUsersFirstName}/>
      </div>
    );
  } 
}
export default App;
