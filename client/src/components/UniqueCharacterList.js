import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';

export default class UniqueCharacterList extends Component {
  render() {

    let uniqueCharacterList = []
    if (this.props.characterArrays[0]) {
      uniqueCharacterList = this.props.characterArrays.map((characterArray, i) => {
        return "hello"
      })
    }

    return (
      <Table.Body>
        {uniqueCharacterList}
      </Table.Body>
    )
  }
}
