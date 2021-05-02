import React, { Component } from 'react'
import '../style/style.css'
import  arrowentericon from '../Image/arrowentericon.png'
import cancelicon from '../Image/cancelicon.png'

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
    }
    OnchangeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    OnclickSendMessage = () => {

    }
    render() {
        return (
            <div>
                <button class="open-button" onClick={this.openForm}>Chat</button>
                <div class="chat-popup" id="myForm">
                    <form action="/action_page.php" class="form-container">
                        <div style={{display:"flex"}}>
                           <div>Chat Message</div>
                           <div Onclick={this.closeForm}><img src={cancelicon} style={{width:"20px" , height:"20px"}}/></div>
                        </div>
                        
                        {/* <textarea placeholder="Type message.." name="msg" required></textarea> */}
                        <div style={{display:"flex"}}>
                            <div><input type="text" placeholder="Enter Message" value={this.state.message} onChange={this.OnchangeMessage} /></div>
                            <div onClick={this.OnclickSendMessage}><img src={arrowentericon} alt="Enter" style={{ width: "20px", height: "20px" }} /></div>
                        </div>

                        {/* <button type="submit" class="btn">Send</button> */}
                        {/* <button type="button" class="btn cancel" onClick={this.closeForm}>Close</button> */}
                    </form>
                </div>
            </div>
        )
    }
}
export default ChartUI