import React, { Component } from 'react'
import '../style/style.css'
import Checkbox from '../Components/Checkbox'
import editicon from '../Image/editicon.png'
import chaticon from '../Image/chaticon.png'

class Table extends Component {
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
    Showinformationcard = (evt, value) => {
        this.props.Showinformationcard(evt, value)
    }
    editdetails = (event, value) => {
        this.props.editdetails(event, value, this.props.details)
    }
    openChatwindow = () => {
        this.props.openChatwindow(this.props.details)
    }
    render() {
        return (
            <div style={{ margin: " 10px 100px 10px 100px" }}>
                <table>
                    <div style={{ display: "flex", textAlign: "left" }}>
                        {/* <Checkbox/> */}
                        <a title={"chart"} onClick={(evt) => this.openChatwindow(evt)}><img style={{cursor:"pointer",width:"40px",height:"40px"}} src={chaticon} alt="chat"/></a>
                        <a title="Edit" onClick={(evt) => this.editdetails(evt, this.props.details.Fullname)}><img class="onhovercolorchange" src={editicon} style={{ width: "15px", height: "15px", margin: "12px", cursor: "pointer", filter: 'opacity(0.7)' }} alt="Edit" /></a>
                        <span dataletters={this.props.details.dataletters}
                            style={{
                                backgroundColor: this.props.details.color ? this.props.details.color : "#e77aa5",
                                display: "inline-block",
                                fontSize: "1em",
                                width: "2.5em",
                                height: "2.5em",
                                lineHeight: "2.5em",
                                textAlign: "center",
                                borderRadius: "50%",
                                verticalAlign: "middle",
                                marginRight: "1em",
                                color: "white"
                            }}></span>
                        <div style={{ width: "50%" }}>
                            <span style={{ fontSize: "16px" }} className="onhoverhyperlink" onClick={(evt) => this.Showinformationcard(evt, this.props.details.Fullname)}>{this.props.details.Fullname}</span><br />
                            <span style={{ fontSize: "12px" }}>{this.props.details.Email}</span>
                        </div>
                        <div style={{ width: "50%" }}>
                            <span style={{ fontSize: "14px" }}>{this.props.details.company}</span>
                        </div>
                    </div>
                </table>
            </div >
        )
    }
}

export default Table