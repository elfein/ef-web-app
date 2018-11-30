import React, { Component } from 'react'
import { Container, Table, Divider } from 'semantic-ui-react'
import UniqueCharacterList from './UniqueCharacterList';

export default class UniqueCharacterTable extends Component {
    render() {
        return (
            <Container>
                <Divider hidden />
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
