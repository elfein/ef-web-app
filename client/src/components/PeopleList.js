import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import PersonCard from './PersonCard'

export default class PeopleList extends Component {
    render() {

        let peopleList = []
        if (this.props.apiPeople[0]) {
            peopleList = this.props.apiPeople.map((person, i) => {
                return <PersonCard
                    key={i}
                    index={i}
                    name={person.display_name}
                    email={person.email_address}
                    jobTitle={person.title}
                />
            })
        }

        return (
            <Card.Group centered>
                {peopleList}
            </Card.Group>
        )
    }
}
