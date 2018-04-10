

import React, { Component } from 'react'

class Microwave extends Component {
    constructor(props) {
        super(props)
        console.log('Microwave.constructor()', props)
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