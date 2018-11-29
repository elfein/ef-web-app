import React from 'react'
import { shallow } from 'enzyme'
import "../setupTests"

import Header from './Header'

describe('Header component', () => {
    it('Header renders app title as expected', () => {
        const component = shallow(<Header title={'App Name'} />)
        // component should render the title prop
        expect(component.contains('App Name')).toBe(true)
    })
})
