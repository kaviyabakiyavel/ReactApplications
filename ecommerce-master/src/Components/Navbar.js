import React, { Component } from 'react'
import YFret from '../image/YFret.png'
import { FaUserCircle } from "react-icons/fa";
import Searchbox from './Searchbox'

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" style={{ height: "50px", display: "flex", justifyContent: "space-between" }}>

                <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <a class="navbar-brand" href="#"><img src={YFret} style={{ width: "100px", height: "100px" }} /></a>
                    <a class="navbartab" href="#home">Home</a>
                    <a class="navbartab" href="#about">About</a>
                    <a class="navbartab" href="#contact">Contact</a>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Searchbox 
                       dynamicSearch = {this.props.dynamicSearch}
                    />
                    <div><FaUserCircle size={24} style={{ cursor: "pointer", margin: '4px', color: "#fff" }} /></div>
                </div>
            </nav>
        )
    }
}
export default Navbar