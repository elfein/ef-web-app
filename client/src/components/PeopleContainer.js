import React, { Component } from 'react'
import axios from 'axios'
import PeopleList from './PeopleList';
import UniqueCharacterContainer from './UniqueCharacterContainer';

export default class PeopleContainer extends Component {
    state = {
        apiPeople: [],
        characterArrays: []
    }

    getPeopleData = async () => {
        const response = await axios.get('/api/people')
        this.setState({ apiPeople: response.data.data })
    }

    componentDidMount = async () => {
        await this.getPeopleData()
        await this.calculateCount()
        this.sortByFrequency()
    }

    calculateCount = () => {
        let charArrays = []
        for (let n = 0; n < 29; n++) {
            charArrays.push([])
        }
        const people = [...this.state.apiPeople]
        for (let i = 0; i < people.length; i++) {
            let email = people[i].email_address
            for (let j = 0; j < email.length; j++) {
                let letter = email[j].toLowerCase()
                switch (letter) {
                    case 'a':
                        charArrays[0].push(letter)
                        break
                    case 'b':
                        charArrays[1].push(letter)
                        break
                    case 'c':
                        charArrays[2].push(letter)
                        break
                    case 'd':
                        charArrays[3].push(letter)
                        break
                    case 'e':
                        charArrays[4].push(letter)
                        break
                    case 'f':
                        charArrays[5].push(letter)
                        break
                    case 'g':
                        charArrays[6].push(letter)
                        break
                    case 'h':
                        charArrays[7].push(letter)
                        break
                    case 'i':
                        charArrays[8].push(letter)
                        break
                    case 'j':
                        charArrays[9].push(letter)
                        break
                    case 'k':
                        charArrays[10].push(letter)
                        break
                    case 'l':
                        charArrays[11].push(letter)
                        break
                    case 'm':
                        charArrays[12].push(letter)
                        break
                    case 'n':
                        charArrays[13].push(letter)
                        break
                    case 'o':
                        charArrays[14].push(letter)
                        break
                    case 'p':
                        charArrays[15].push(letter)
                        break
                    case 'q':
                        charArrays[16].push(letter)
                        break
                    case 'r':
                        charArrays[17].push(letter)
                        break
                    case 's':
                        charArrays[18].push(letter)
                        break
                    case 't':
                        charArrays[19].push(letter)
                        break
                    case 'u':
                        charArrays[20].push(letter)
                        break
                    case 'v':
                        charArrays[21].push(letter)
                        break
                    case 'w':
                        charArrays[22].push(letter)
                        break
                    case 'x':
                        charArrays[23].push(letter)
                        break
                    case 'y':
                        charArrays[24].push(letter)
                        break
                    case 'z':
                        charArrays[25].push(letter)
                        break
                    case '@':
                        charArrays[26].push(letter)
                        break
                    case '.':
                        charArrays[27].push(letter)
                        break
                    case '_':
                        charArrays[28].push(letter)
                        break
                    default:
                        charArrays[29].push(letter)
                }
            }
        }
        this.setState({ characterArrays: charArrays })
    }

    sortByFrequency = () => {
        let characterArrays = [...this.state.characterArrays]
        characterArrays.sort((a, b) => {
            return b.length - a.length
        })
        this.setState({ characterArrays })
    }

    render() {
        return (
            <div>
                <h2>Information</h2>
                <UniqueCharacterContainer
                    characterArrays={this.state.characterArrays} />
                <h2>All People</h2>
                <PeopleList
                    apiPeople={this.state.apiPeople} />
            </div>
        )
    }
}
