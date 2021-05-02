import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class RangeSlider extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            reverseValue: 100000
        }
    }

    handleChangeReverse = (value) => {
        this.setState({
            reverseValue: value
        })
        this.props.Rangeslider(value)
    }

    render() {
        const {reverseValue } = this.state
        return (
            <div className='slider orientation-reversed'>
                <div className='slider-group'>
                    <div className='slider-horizontal' style={{margin:"20px 20px"}}>
                        <Slider
                            min={0}
                            max={100000}
                            value={reverseValue}
                            orientation='horizontal'
                            onChange={this.handleChangeReverse}
                        />
                        <div style={{display:"flex",color:'#fff'}}>Show upto ₹ {reverseValue}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RangeSlider