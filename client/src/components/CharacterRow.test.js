import React from 'react'
import { shallow } from 'enzyme'

import CharacterRow from './CharacterRow'

describe('CharacterRow component', () => {
    let component
    beforeEach(() => {
        component = shallow(<CharacterRow char={"Z"} length={10} />)
    })

    it('should render correct character', () => {
        expect(component.contains('Z')).toBeTruthy()
    })

    it('should render correct length', () => {
        expect(component.contains(10)).toBeTruthy()
    })
})