import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Microwave from '../Microwave'


it('shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Microwave />)
    const result = renderer.getRenderOutput()

    console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        'Microwave is good'
       
        
    )

})
