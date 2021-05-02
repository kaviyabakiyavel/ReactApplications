import React, { Component } from 'react'
import '../style/style.css'
import weighticon from '../Image/weighticon.png'
import horizontialicon from '../Image/horizontialicon.png'


class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: {
                    Fullname : "Micky Huston",
                    firstname : "Micky",
                    lastname : "Huston",
                    Email : "mickyhuston@live.com",
                    Phone : "0692384567",
                    company : "Project Manager in Data Analyst Team",
                    Address : "47 west berinlin road germany",
                    Notice : "Tax Evasion and Payout Notice",
                    dataletters: "MH",
                    color:"#FFA500",
                    Date: "09 Oct 2020 10:00am",
                    id:0,
                    status:"Online",
            },
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
    componentDidUpdate(prevProps) {
        if (this.props.onclickdetails !== prevProps.onclickdetails) {
            this.setState({
                details: this.props.onclickdetails[0]
            })
        }
    }
    render() {

        return (
            <div>
                <div class="card" style={{ height: this.props.dataloader ? "350px" : "" }}>
                    <div class="container">
                        {this.props.dataloader ? <div class="spinner" style={{ margin: this.props.dataloader ? "150px auto 0" : "" }}>
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                            :
                            <div>
                                <div>
                                    <span dataletters={this.state.details.dataletters}
                                        style={{
                                            backgroundColor: this.state.details.color ? this.state.details.color : "#e77aa5",
                                            display: "inline-block",
                                            fontSize: "1.2em",
                                            width: "4em",
                                            height: "4em",
                                            lineHeight: "4em",
                                            textAlign: "center",
                                            borderRadius: "50%",
                                            verticalAlign: "middle",
                                            marginRight: "1em",
                                            color: "white"
                                        }}></span><br />
                                    <span style={{ fontSize: "16px", fontWeight: "600" }}>{this.state.details.Fullname}</span><br />
                                    <span style={{ fontSize: "12px" }}>{this.state.details.company}</span>
                                </div>
                                <div style={{ padding: "8px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-around", textAlign: "left", width: "100%" }}>
                                        <span style={{ width: "50%", fontSize: "14px" }}>First Name</span>
                                        <span style={{ width: "50%", fontSize: "14px", fontWeight: "600" }}>{this.state.details.Fullname}</span>
                                    </div>
                                    <br />
                                    <div style={{ display: "flex", justifyContent: "space-around", textAlign: "left", width: "100%" }}>
                                        <span style={{ width: "50%", fontSize: "14px" }}>Email</span>
                                        <span style={{ width: "50%", fontSize: "15px", fontWeight: "600" }}>{this.state.details.Email}</span>
                                    </div>
                                    <br />
                                    <div style={{ display: "flex", justifyContent: "space-around", textAlign: "left", width: "100%" }}>
                                        <span style={{ width: "50%", fontSize: "14px" }}>Phone</span>
                                        <span style={{ width: "50%", fontSize: "14px", fontWeight: "600" }}>{this.state.details.Phone}</span>
                                    </div>
                                    <br />
                                    <div style={{ display: "flex", justifyContent: "space-around", textAlign: "left", width: "100%" }}>
                                        <span style={{ width: "50%", fontSize: "14px" }}>Company</span>
                                        <span style={{ width: "50%", fontSize: "14px", fontWeight: "600" }}>{this.state.details.company}</span>
                                    </div>
                                    <br />
                                    <div style={{ display: "flex", justifyContent: "space-around", textAlign: "left", width: "100%" }}>
                                        <span style={{ width: "50%", fontSize: "14px" }}>Address</span>
                                        <span style={{ width: "50%", fontSize: "15px", fontWeight: "600" }}>{this.state.details.Address}</span>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div class="card" style={{ height: this.props.dataloader ? "100px" : "" }}>
                    <div class="container" style={{ display: "flex" }}>
                        {this.props.dataloader ? <div class="spinner" style={{ margin: this.props.dataloader ? "40px auto 0" : "" }}>
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                            :
                            <div style={{ display: "flex" }}>
                                <div style={{ width: "50px" }}><img src={weighticon} style={{ padding: "12px", width: "80px", height: "80px", filter: "grayscale(1)", display: "flex" }} alt="User" /></div>
                                <div style={{ padding: "12px 50px", textAlign: "left" }}>
                                    <div style={{ fontSize: "16px", fontWeight: "600", padding: "2px" }}>{this.state.details.Notice}</div>
                                    <div style={{ fontSize: "12px", padding: "2px" }}>{this.state.details.Date}</div>
                                </div>
                                <div style={{ width: "50px" }}><img src={horizontialicon} style={{ marginTop: "20px", width: "25px", height: "25px", filter: "opacity(0.5)", display: "flex" }} alt="User" /></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Card