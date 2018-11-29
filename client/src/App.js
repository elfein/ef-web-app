import React, { Component } from 'react'
import Header from './components/Header'
import PeopleContainer from './components/PeopleContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header title={"Simple Web App"} />
        <PeopleContainer />
      </div>
    );
  }
}

export default App;
