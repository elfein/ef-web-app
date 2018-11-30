import React, { Component } from 'react'
import { Container, Table } from 'semantic-ui-react'
import UniqueCharacterList from './UniqueCharacterList';

export default class UniqueCharacterTable extends Component {
    render() {
        return (
            <Container>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Character</Table.HeaderCell>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <UniqueCharacterList
                    characterArrays={this.props.characterArrays} />
                </Table>
            </Container>
        )
    }
}
