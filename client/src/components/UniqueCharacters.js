import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class UniqueCharacters extends Component {
    state = {
        showList: false
    }

    handleClick = () => {
        this.toggleList()
    }

    toggleList = () => {
        this.setState({ showList: !this.state.showList })
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
                    "list"
                    :
                    null}
            </div>
        )
    }
}
