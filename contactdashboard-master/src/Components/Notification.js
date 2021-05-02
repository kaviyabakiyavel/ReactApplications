import React, { Component } from 'react'
import '../style/style.css'

class Notification extends Component {
    closeNotification = () => {
        this.props.closeNotification()
    }
    render() {
        return (
            <div class="alert">
                <span class="closebtn" onClick={this.closeNotification}>&times;</span>
                {this.props.message}
            </div >
        )
    }
}
export default Notification