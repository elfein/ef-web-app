import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';

export default class CharacterRow extends Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.char}</Table.Cell>
        <Table.Cell>{this.props.length}</Table.Cell>
      </Table.Row>
    )
  }
}
