import React, { Component } from 'react'
import '../Style/style.css'

class Searchbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            typing: false,
            typingTimeout: 0,
        }
    }
    handleInputChange = (evt) => {
        //why this should not use directly ?? 
        const self = this;
        //example kaviya
        //settime out stores the timeout id 
        // before 5000 when ever user types -> it ill cleartimeout function
        if (self.state.typingTimeout) {
            //it will clear the function k is removed 
            clearTimeout(self.state.typingTimeout);
        }
        self.setState({
            searchTerm: evt.target.value, //ka
            typing: false,
            //id 0001
            //id 0002
            typingTimeout: setTimeout(function () {
                //after 5000 only this function will excute 
                self.props.dynamicSearch(self.state.searchTerm)
            }, 5000)
        })
    }
    render() {
        // console.log("typingTimeout", this.state.typingTimeout)
        // console.log("this.state.searchTerms", this.state.searchTerm)
        return (
            <form style={{ padding: "0px 16px" }}>
                <input
                    class="Searchbox"
                    type="text"
                    name="search"
                    placeholder="Search..."
                    onChange={this.handleInputChange}
                />
            </form>
        )
    }
}

export default Searchbox