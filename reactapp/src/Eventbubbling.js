//Event bubbling- in real lif bubble goes from bottom to top
// on a webpage bubbling means when you have an event on a element the execution of the event goes from the lowest element to the top

import React, { Component } from 'react'

export default class Eventbubbling extends Component {
    parentonclick = () => {
        console.log("parent clicked")
    }
    childonclick = () => {
        console.log("child clicked")
    }
    render() {
        const numb = [1,2,3,4,5]
        //const dispaly = X
        return (
            <div id="main">
                 {
                     numb.map((num) => <ul>{num}</ul>)
                 }
                {/* <h1>{0+1}</h1> */}
                {/* <div id="parent" onClick={this.parentonclick}>
                    <div id="child" onClick={this.childonclick}>child</div>
                    <div id="other">other</div>
                </div> */}
            </div>
        )
    }
}

//output
// child clicked
// parent clicked 