import React, { Component } from 'react'
import UniqueCharacterTable from './UniqueCharacterTable';
import { Button } from 'semantic-ui-react'

export default class UniqueCharacterContainer extends Component {
    state = {
        showList: false,
        characterArrays: []
    }

    handleClick = () => {
        this.toggleList()
        this.calculateCount()
    }

    toggleList = () => {
        this.setState({ showList: !this.state.showList })
    }

    calculateCount = () => {
        console.log("hello")
    }

    render() {
        return (
            <div>
                <Button size='big' onClick={this.handleClick}>
                    {this.state.showList ?
                        "Hide Unique Characters"
                        :
                        "Calculate Unique Characters"}
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
