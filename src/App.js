import React, {Component} from 'react';

import { Cardlist } from './components/card-list.component';

import { SearchBox } from './components/search-box.component';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      users: [],
      searchFilter: "",
    }
  }  

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(users => this.setState({
        users: users.data.map(user => ({
          ...user, 
          fullName: user.first_name + " " + user.last_name
        }))
      }))
  }

  changeHandler = e => (
    this.setState({searchFilter: e.target.value})
  );

  render() {
    const {users, searchFilter} = this.state;
    const filteredUser = users.filter(user => {
      return user.fullName.toLowerCase().includes(searchFilter.toLowerCase())
    })
    

    return (
      <div className="App">
        <h1 className="mainHeader"> Users Practice </h1>
        <SearchBox
          searchText="search user"
          changeHandler={this.changeHandler}
        /> 
        <Cardlist user={filteredUser} />
      </div>
    );
  } 
}
export default App;
