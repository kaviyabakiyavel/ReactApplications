import React, { Component } from 'react'

class Checkbox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{padding:"12px 16px"}}>
                 <input 
                    type="checkbox" 
                    id={this.props.id} 
                    name={this.props.name}
                    value={this.props.value}
                    className="checkboxstyle"
                    ></input>
            </div>
        )
    }
}

export default Checkbox