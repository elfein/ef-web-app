import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import axios from 'axios'

export default class PeopleList extends Component {

    getPeopleData = async () => {
        const response = await axios.get('/api/people')
        console.log(response)
    }

    componentDidMount = () => {
        this.getPeopleData()
    }

    render() {
    return (
      <Card.Group>
      </Card.Group>
    )
  }
}
