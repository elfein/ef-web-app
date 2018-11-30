import React from 'react'
import { shallow } from 'enzyme'

import UniqueCharacterContainer from './UniqueCharacterContainer'

describe('UniqueCharacterContainer component', () => {
    let component
    beforeEach(() => {
        component = shallow(<UniqueCharacterContainer />)
    })

    it('should have a button that toggles showList in state', () => {
        component.find('Button').simulate('click')
        expect(component.state('showList')).toBeTruthy()
    })

    it('should display the show phrase on the button when initialized', () => {
        expect(component.find('Button').props().children).toEqual("Show Unique Characters")
    })

    it('should display the hide phrase on the button on click', () => {
        component.find('Button').simulate('click')
        expect(component.find('Button').props().children).toEqual("Hide Unique Characters")
    })
})