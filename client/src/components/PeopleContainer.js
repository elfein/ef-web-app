import React, { Component } from 'react'
import axios from 'axios'
import PeopleList from './PeopleList';

export default class PeopleContainer extends Component {
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
        return (
            <div>
                <h2>All People</h2>
                <PeopleList
                apiPeople={this.state.apiPeople} />
            </div>
        )
    }
}
