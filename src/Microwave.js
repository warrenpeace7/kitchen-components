

import React, { Component } from 'react'

class Microwave extends Component {
    constructor() {
        super()
        console.log('Microwave.constructor()')
      }
    
      componentWillMount() {
        console.log('Microwave.componentWillMount()')
    
        }
      componentDidMount() {
        console.log('Microwave.componentDidMount()')
      }
      
    render() {
        console.log('Microwave.render()')
        return (
            <div>
                    Microwave is good
               
                </div>
        )
    }
}

export default Microwave