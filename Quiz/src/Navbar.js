import React, { Component } from 'react'


class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" style={{ height: "50px", display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent:"center" ,fontSize:"18px",fontWeight:"700"}} >
                    Basic GK Quiz
                </div>
            </nav>
        )
    }
}
export default Navbar