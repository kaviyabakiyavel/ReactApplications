import React, { Component } from 'react'
import homeicon from '../Image/homeicon.png'
import usericon from '../Image/usericon.png'
import saveicon from '../Image/saveicon.png'
import clockicon from '../Image/clockicon.png'
import calendericon from '../Image/calendericon.png'
import settingicon from '../Image/settingicon.png'

class SideBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="sidebar">
                <a class="active" href="#home"><img src={homeicon} style={{ width:"20px",height:"20px", filter: "invert(1)"}} alt="Home" /></a>
                <a href="#user"><img src={usericon} style={{width:"20px",height:"20px", filter: "invert(1)"}} alt="User" /></a>
                <a href="#save"><img src={saveicon}  style={{ width:"20px",height:"20px", filter: "invert(1)"}} alt="Save" /></a>
                <a href="#clock"><img src={clockicon} style={{width:"20px",height:"20px",filter: "invert(1)"}} alt="Clock" /></a>
                <a href="#calender"><img src={calendericon} style={{width:"20px",height:"20px",filter: "invert(1)"}}  alt="Calender" /></a>
                <a href="#setting"><img src={settingicon} style={{ width:"20px",height:"20px",filter:"invert(1)"}}  alt="Setting" /></a>
            </div>
        )
    }
}

export default SideBar