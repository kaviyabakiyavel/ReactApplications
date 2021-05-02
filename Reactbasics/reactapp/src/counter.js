import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Increment</button>
            </div>
        )
    }
}
