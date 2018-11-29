import React, { Component } from 'react'
import { Container, Table } from 'semantic-ui-react'

export default class UniqueCharacterList extends Component {
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
                        apiPeople={this.props.apiPeople}
                    />
                </Table>
            </Container>
        )
    }
}
