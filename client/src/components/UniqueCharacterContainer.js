import React, { Component } from 'react'
import UniqueCharacterTable from './UniqueCharacterTable';
import { Button } from 'semantic-ui-react'

export default class UniqueCharacterContainer extends Component {
    state = {
        showList: false,
        characterArrays: ["a"]
    }

    toggleList = () => {
        this.setState({ showList: !this.state.showList })
    }

    componentDidMount = () => {
        this.calculateCount()
    }

    calculateCount = () => {
        console.log("hello")
    }

    render() {
        return (
            <div>
                <Button size='big' onClick={this.toggleList}>
                    {this.state.showList ?
                        "Hide Unique Characters"
                        :
                        "Show Unique Characters"}
                </Button>
                {this.state.showList ?
                    <UniqueCharacterTable
                        characterArrays={this.state.characterArrays}
                    />
                    :
                    null}
            </div>
        )
    }
}
