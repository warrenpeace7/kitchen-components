
import React, { Component } from 'react'

class Fridge extends Component {
    constructor(props) {
        super(props)
        console.log('Fridge.constructor()', props)
      }
    
      componentWillMount() {
        console.log('Fridge.componentWillMount()')
    
        }
      componentDidMount() {
        console.log('Fridge.componentDidMount()')
      }
    render() {
        console.log('Fridge.render()')
        return (
            <div>
                    Fridge is life
                </div>
        )
    }
}

export default Fridge