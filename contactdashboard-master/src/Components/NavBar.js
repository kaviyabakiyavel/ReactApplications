import React, { Component } from 'react'
import messageicon from '../Image/messageicon.png'
import bellicon from '../Image/bellicon.png'
import searchicon from '../Image/searchicon.png'
import arrowdown from '../Image/arrowdown.png'

class NavBar extends Component {
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
    render() {
        return (
            <div class="Navbar" style={{ display: "flex", justifyContent: "space-between" }}>
                <div class="Navbarli"><a class="active" href="#search"><img src={searchicon} style={{ width: "22px", height: "22px" }} alt="Save" /></a></div>
                <ul class="Navbarul">
                    <li class="Navbarli"><a href="#add">+ Add</a></li>
                    <li class="Navbarli"><a href="#message"><img src={messageicon} style={{ width: "20px", height: "20px" }} alt="Save" /></a></li>
                    <li class="Navbarli">
                        <a href="#usersettings">
                            <span>Kaviya Bakiyavel </span>
                            <span><img src={arrowdown} style={{ height: "10px", padding: "0px 4px" }} alt="Setting" /></span>
                        </a>
                    </li>
                    <li class="Navbarli"><a href="#about"><img src={bellicon} style={{ width: "20px", height: "20px" }} alt="Save" /></a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar