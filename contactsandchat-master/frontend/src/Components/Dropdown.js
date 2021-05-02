import React, { Component } from 'react'
import { map } from 'lodash';

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            loggedinuser: "Micky Huston",
            loggedinuserid: "0",
        }
        this.updateDimensions = this.updateDimensions.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.contactdetails !== this.props.contactdetails) {
            this.setState({
                contactdetails: this.props.contactdetails
            })
        }
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
    LoggedinUser = (event) => {
        debugger
        this.setState({
            loggedinuser: event.target.selectedOptions[0].innerHTML,
            loggedinuserid: event.target.value
        })
        // let contactdetails = this.state.contactdetails.filter(details => event.target.value != details.id);
        // console.log("someArray", contactdetails)
        // this.setState({
        //     contactdetails: contactdetails,
        //     loggedinuser: event.target.selectedOptions[0].innerHTML,
        // })
         this.props.LoggedinUser(event.target.value,event.target.selectedOptions[0].innerHTML)
    }
    render() {
        return (
            <div style={{ padding: "15px 0px" }}>
                <select style={{ border: "none" }} id="contactdropdown" default={this.state.loggedinuser} onChange={(evt) => this.LoggedinUser(evt)}>
                    {map(this.state.contactdetails, (details, index) => {
                        if (details["id"] == this.state.loggedinuserid) {
                            return <option value={details.id} name={details.Fullname} selected>
                                {details.Fullname}
                            </option>
                        } else {
                            return <option value={details.id} name={details.Fullname} >
                                {details.Fullname}
                            </option>
                        }
                    })}
                </select>
            </div >
        )
    }
}

export default Dropdown