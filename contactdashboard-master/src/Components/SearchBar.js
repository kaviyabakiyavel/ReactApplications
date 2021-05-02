import React, { Component } from 'react'
import searchicon from '../Image/searchicon.png'
import '../style/style.css'

class Searchbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            typing: false,
            typingTimeout: 0,
        }
    }
    OnchangeSearchbox = (evt) => {
        const self = this;
        if(self.state.typingTimeout){
           clearTimeout(self.state.typingTimeout);
        }
        self.setState({
            searchTerm : evt.target.value,
            typing : false,
            typingTimeout : setTimeout(function () {
                self.props.OnchangeSearchbox(self.state.searchTerm)
            },5000)
        })
    }
    render() {
        return (
            <div className="searchboxContainer" >
                <input
                    className="Searchboxstyle"
                    type="text"
                    name="search"
                    placeholder="Search..."
                    onChange={this.OnchangeSearchbox}
                />
            </div>
        )
    }
}

export default Searchbox