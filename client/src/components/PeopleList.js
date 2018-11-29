import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import axios from 'axios'
import PersonCard from './PersonCard';

export default class PeopleList extends Component {
state = {
    apiPeople: []
}


    getPeopleData = async () => {
        const response = await axios.get('/api/people')
        this.setState({ apiPeople: response.data.data })
    }

    componentDidMount = () => {
        this.getPeopleData()
    }

    render() {

        let peopleList = []
        if (this.state.apiPeople[0]) {
            peopleList = this.state.apiPeople.map((person, i) => {
                return <PersonCard
                    key={i}
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
