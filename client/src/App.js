import React, { Component } from 'react'
import Header from './components/Header'
import PeopleContainer from './components/PeopleContainer'
import { Container, Divider } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Divider hidden />
        <Header title={"Simple Web App"} />
        <Divider />
        <PeopleContainer />
      </Container>
    )
  }
}

export default App
