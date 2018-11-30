import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import CharacterRow from './CharacterRow'

export default class UniqueCharacterList extends Component {
  render() {

    let uniqueCharacterList = []
    if (this.props.characterArrays[0]) {
      uniqueCharacterList = this.props.characterArrays.map((characterArray, i) => {
        return <CharacterRow
          key={i}
          char={characterArray[0]}
          length={characterArray.length}
        />
      })
    }

    return (
      <Table.Body>
        {uniqueCharacterList}
      </Table.Body>
    )
  }
}
