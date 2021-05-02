import React, { Component } from 'react'
import '../style/style.css'
import arrowentericon from '../Image/arrowentericon.png'
import cancelicon from '../Image/cancelicon.png'
import ChatMessage from '../Components/ChatMessage'
import onlineicon from '../Image/onlineicon.png'
import offlineicon from '../Image/offlineicon.png'
import{isEmpty} from 'lodash'

class ChartUI extends Component {
    constructor(props) {
        super()
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            message: ""
        }
        this.updateDimensions = this.updateDimensions.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
    }
    componentDidUpdate(prevProps) {
        if (this.props.openChatwindow !== prevProps.openChatwindow) {
            // if(!isEmpty(this.props.senderdetails)){
            //     this.setState({
            //         chatuserdetails : this.props.senderdetails
            //     })
            // }
            this.openForm()
            this.setState({
                chatuserdetails: this.props.chatuserdetails
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
    openForm = () => {
        document.getElementById("myForm").style.display = "block";
    }

    closeForm = () => {
        document.getElementById("myForm").style.display = "none";
        this.props.closeForm()
    }
    OnchangeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    OnclickSendMessage = () => {
        this.props.OnclickSendMessage(this.state.message)
        this.setState({ message: '' })
    }
    render() {
        console.log("this.props.chatuserdetails",this.props.chatuserdetails)
        return (
            <div>
                <button class="open-button" onClick={this.openForm}>Chat</button>
                <div class="chat-popup" id="myForm">
                    <form class="form-container" style={{ width: "400px", height: "400px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px" }}>
                            <span style={{ fontSize: "16px", fontWeight: "700" }}>
                                {this.state.chatuserdetails && this.state.chatuserdetails.status == "Online" ?
                                    <span><img alt="Online" src={onlineicon} style={{ width: "10px", height: "10px", marginRight: "8px" }} /> {this.props.chatuserdetails && this.props.chatuserdetails.Fullname}</span>
                                    :
                                    <span><img alt="Offline" src={offlineicon} style={{ width: "10px", height: "10px", marginRight: "8px" }} /> {this.props.chatuserdetails && this.props.chatuserdetails.Fullname}</span>
                                }

                                <div style={{ fontSize: "10px", fontWeight: "600" }}>
                                    <span style={{ padding: "4px" }}>{this.state.chatuserdetails && this.state.chatuserdetails.status}</span>
                                    <span>{this.state.chatuserdetails && this.state.chatuserdetails.Date}</span>
                                </div>
                            </span>
                            <span style={{ cursor: "pointer" }} onClick={this.closeForm}>X</span>
                        </div>
                        {this.props.messages.map((message, index) =>
                            <ChatMessage
                                key={index}
                                message={message.message}
                                name={message.name}
                            />,
                        )}
                        <div class="actions">
                            <div class="chat-popup" style={{ display: "block", boder: "none !important" }}>
                                <div style={{ display: "flex", paddingBottom: "20px" }}>
                                    <div><textarea type="text" placeholder="Enter Message" value={this.state.message} onChange={this.OnchangeMessage} /></div>
                                    <div style={{ padding: "15px" }} onClick={this.OnclickSendMessage}><img src={arrowentericon} alt="Enter" style={{ width: "20px", height: "20px" }} /></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default ChartUI