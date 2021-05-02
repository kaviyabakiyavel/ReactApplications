import React, { Component } from 'react'
import Draganddropgrid from './Dragandropgrid'
import './App.css';
import Navbar from './Component/Navbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Draganddropgrid />
            </div>
        )
    }
}
App.defaultProps = {
    rowHeight: 150,
    cols: 2, // to make grid item 50% or 100%
  };
  
export default App