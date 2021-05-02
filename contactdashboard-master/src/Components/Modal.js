import React from "react";
import '../style/style.css'
import Textfield from '../Components/Textfield'
import LongText from '../Components/LongText'
import { capitalizeFirstLetter, validateEmail } from '../Components/Commonfunction'
import { isEmpty } from 'lodash'

export default class modalbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            emailid: "",
            phonenumber: "",
            address: "",
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
        }
        this.updateDimensions = this.updateDimensions.bind(this)

    }
    componentDidMount() {
        if (this.props.editslider == true) {
            if (!isEmpty(this.props.details)) {
                this.setState({
                    firstname: this.props.details.firstname,
                    lastname: this.props.details.lastname,
                    emailid: this.props.details.Email,
                    phonenumber: this.props.details.Phone,
                    address: this.props.details.Address,
                    id: this.props.details.id
                })
            }
        }
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
    OnclickCloseModal = e => {
        this.props.OnclickCloseModal && this.props.OnclickCloseModal(e);
        this.setState({
            firstname: "",
            lastname: "",
            emailid: "",
            phonenumber: "",
            address: "",
        })
    };
    OnAddContact = (e, Params) => {
        if (isEmpty(this.state.firstname) || isEmpty(this.state.lastname) || isEmpty(this.state.emailid) || isEmpty(this.state.phonenumber) || isEmpty(this.state.address)) {
            this.setState({
                showmessage: true,
            })
        } else {
            var data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                Fullname: capitalizeFirstLetter(this.state.firstname) + " " + capitalizeFirstLetter(this.state.lastname),
                Email: this.state.emailid,
                Phone: this.state.phonenumber,
                Address: this.state.address,
                color: "#808000",
                company: "IT",
                Notice: "Tax Evasion and Payout Notice",
                Date: "27 Mar 2017 10:00am",
                dataletters: capitalizeFirstLetter(this.state.firstname[0]) + "" + capitalizeFirstLetter(this.state.lastname[0])
            }
            this.props.OnAddContact && this.props.OnAddContact(data)
            this.setState({
                showmessage: false,
            })
        }
    }
    OnEditContact = (e, Params) => {
        if (isEmpty(this.state.firstname) || isEmpty(this.state.lastname) || isEmpty(this.state.emailid) || isEmpty(this.state.phonenumber) || isEmpty(this.state.address)) {
            this.setState({
                showmessage: true,
            })
        } else {
            var data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                Fullname: capitalizeFirstLetter(this.state.firstname) + " " + capitalizeFirstLetter(this.state.lastname),
                Email: this.state.emailid,
                Phone: this.state.phonenumber,
                Address: this.state.address,
                id: this.state.id,
                color: "#808000",
                company: "IT",
                Notice: "Tax Evasion and Payout Notice",
                Date: "27 Mar 2017 10:00am",
                dataletters: capitalizeFirstLetter(this.state.firstname[0]) + "" + capitalizeFirstLetter(this.state.lastname[0])
            }
            this.props.OnEditContact && this.props.OnEditContact(data, Params)
            this.setState({
                showmessage: false,
            })
        }
    }
    onChangedetails = e => {
        this.setState({ [e.target.id]: e.target.value })
        if (e.target.id == "firstname") {
            if (/[^a-zA-Z]/.test(e.target.value)) { this.setState({ firstnameValidation: true, }) }
            else { this.setState({ firstnameValidation: false }) }
        }
        else if (e.target.id == "lastname") {
            if (/[^a-zA-Z]/.test(e.target.value)) { this.setState({ lastnameValidation: true }) }
            else { this.setState({ lastnameValidation: false }) }
        }
        else if (e.target.id == "emailid") {
            if (validateEmail(e.target.value)) { this.setState({ emailvalidation: false }) }
            else { this.setState({ emailvalidation: true }) }
        }
        else if (e.target.id == "phonenumber") {
            if (e.target.value.length >= 10) { this.setState({ phonenumbervalidation: true }) }
            else { this.setState({ phonenumbervalidation: false }) }
        }
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div class="modalbox" id="modalbox" style={{ marginLeft: "100px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>{this.props.editslider ? "Edit Contact" : "Add New Contact"}</span>
                    <span style={{ cursor: "pointer" }} onClick={this.OnclickCloseModal}>X</span>
                </div>
                <div class="content">
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px", width: "100%" }}>
                        <div style={{ width: "40%", fontSize: "14px", textAlign: "left" }}>First Name</div>
                        <div style={{ width: "60%" }}><Textfield type="text" value={this.state.firstname} placeholder="Enter first name" id="firstname" onChange={this.onChangedetails} required /></div>
                    </div>
                    <div style={{ marginLeft: "30px", fontSize: "12px", color: "red" }}>{this.state.firstnameValidation ? "Please enter alphabet*" : ""}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px", width: "100%" }}>
                        <div style={{ width: "40%", fontSize: "14px", textAlign: "left" }}>Last Name</div>
                        <div style={{ width: "60%" }}><Textfield type="text" value={this.state.lastname} placeholder="Enter last name" id="lastname" onChange={this.onChangedetails} required /></div>
                    </div>
                    <div style={{ marginLeft: "30px", fontSize: "12px", color: "red" }}>{this.state.lastnameValidation ? "Please enter alphabet*" : ""}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px", width: "100%" }}>
                        <div style={{ width: "40%", fontSize: "14px", textAlign: "left" }}>Email Id</div>
                        <div style={{ width: "60%" }}><Textfield type="text" value={this.state.emailid} placeholder="Enter Email Id" id="emailid" onChange={this.onChangedetails} required /></div>
                    </div>
                    <div style={{ marginLeft: "60px", fontSize: "12px", color: "red" }}>{this.state.emailvalidation ? "Please enter valid emailid*" : ""}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px", width: "100%" }}>
                        <div style={{ width: "40%", fontSize: "14px", textAlign: "left" }}>Phone Number</div>
                        <div style={{ width: "60%" }}><Textfield type="number" value={this.state.phonenumber} placeholder="Enter Phone Number" id="phonenumber" onChange={this.onChangedetails} required /></div><br />
                    </div>
                    <div style={{ marginLeft: "110px", fontSize: "12px", color: "red" }}>{this.state.phonenumbervalidation ? "Please enter 10 digit phone number*" : ""}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px" }}>
                        <div style={{ width: "40%", fontSize: "14px", textAlign: "left" }}>Address</div>
                        <div style={{ width: "60%" }}><LongText value={this.state.address} placeholder="Enter Address" id="address" onChange={this.onChangedetails} required /></div>
                    </div>
                    <div style={{ marginLeft: "45px", fontSize: "12px", color: "red" }}>{this.state.showmessage ? "Please Enter all the field*" : ""} </div>
                </div>
                <div class="actions">
                    {this.props.editslider ?
                        <button class="toggle-button" onClick={(evt) => this.OnEditContact(evt, "Edit")}>
                            Edit Contact
                        </button>
                        :
                        <button class="toggle-button" onClick={(evt) => this.OnAddContact(evt, "Add")}>
                            Add Contact
                        </button>
                    }
                </div>
            </div>
        );
    }
}