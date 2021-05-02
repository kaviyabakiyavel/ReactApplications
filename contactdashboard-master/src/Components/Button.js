import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
        }
        this.updateDimensions = this.updateDimensions.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
    }
    updateDimensions = () => {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }
    OnclickAddcontact = () => {
        this.props.OnclickAddcontact()
    }
    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.OnclickAddcontact}
                    className={this.props.className}
                    disabled={this.props.disabledbutton}
                    style={this.props.customestylebutton}
                >
                    {this.props.name}
                </button>
            </div>
        )
    }
}

export default Button