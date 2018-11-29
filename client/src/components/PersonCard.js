import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class PersonCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>{this.props.jobTitle}</Card.Meta>
            <Card.Description>{this.props.email}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
