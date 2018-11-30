import React from 'react'
import { shallow } from 'enzyme'

import PeopleContainer from './PeopleContainer'

describe('PeopleContainer component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<PeopleContainer />)
    })

    test('Character Arrays sorted by frequency from highest to lowest', () => {
        wrapper.setState({ characterArrays: [["a", "a", "a"], ["e", "e", "e", "e", "e"]] })
        wrapper.instance().sortByFrequency()
        expect(wrapper.state().characterArrays[0][0]).toEqual("e")
    })
})