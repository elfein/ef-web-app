import React, { Component } from 'react'
import PeopleList from './PeopleList';
import { Card } from 'semantic-ui-react'

export default class PeopleContainer extends Component {
    render() {
        return (
            <div>
                <h2>All People</h2>
                <Card.Group>
                    <PeopleList />
                </Card.Group>
            </div>
        )
    }
}
