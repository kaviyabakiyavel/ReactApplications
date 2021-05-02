import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar'
import Button from '../Components/Button'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import Table from '../Components/Table'
import { map,isEmpty } from 'lodash';
import { contactdetails } from '../Data.js'
import Card from '../Components/Card'
import Modal from '../Components/Modal'
import Notification from '../Components/Notification'
import ChartUI from '../Components/ChatUI'


const orginaldetails = [...contactdetails]
class Dashboard extends Component {
    constructor(props) {
        super()
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            fulldetails: "",
            indexval: "",
            dataloader: false,
            showslider: false,
            showmessage: ""
        }
        this.updateDimensions = this.updateDimensions.bind(this) 
    }
    componentDidMount() {
        this.setState({
            contactdetails: [...orginaldetails]
        })
        {
            map(this.state.contactdetails, (details, index) => {
                this.setState({
                    fulldetails: details,
                    indexval: index
                })
            })
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
    Showinformationcard = (event, value) => {
        this.setState({ dataloader: true });
        let data = []
        {
            map(this.state.contactdetails, (details, index) => {
                if (value == details.Fullname) {
                    data.push(details)
                }
            })
        }
        if (!this.state.dataloader) {
            setTimeout(() => {
                this.setState({
                    onclickdetails: data,
                    dataloader: false
                });
            }, 500)
        }
    }
    OnclickAddcontact = () => {
        this.setState({
            showslider: true,
            Adddata: {
                firstname: "",
                lastname: "",
                emailid: "",
                phonenumber: "",
                address: "",
            }
        })
    }
    OnclickCloseModal = () => {
        this.setState({
            showslider: false,
            editslider:false
        })
    }
    OnAddContact = (data) => {
        this.setState({
            showslider: false
        })
        let finalcontactdetails = [...this.state.contactdetails]
        var duplicateflag = 0
        map(this.state.contactdetails, (details, index) => {
            if (details["Fullname"] == data["Fullname"] || details["Email"] == data["Email"] || details["Phone"] == data["Phone"]) {
                duplicateflag = duplicateflag + 1
            }
        })
        if (duplicateflag > 0) {
            this.setState({
                showNotification: true,
                showerrormessage: "User already present in the table"
            })
        } else {
            finalcontactdetails.push(data)
            this.setState({
                showNotification: true,
                showsuccessmessage: "User Contact Added Successfully",
                contactdetails: finalcontactdetails
            })
        }
        setTimeout(() => {
            this.setState({
                showNotification: false,
            })
        }, 2000)
    }
    OnEditContact = (data,params) => {
        let contactdetails = [...orginaldetails]
        map(contactdetails,(details,index)=>{
            if(details["id"] == data["id"]){
                contactdetails[index] = data
                this.setState({
                    contactdetails : contactdetails,
                    showslider : false
                })
            }
        })
    }
    closeNotification = () => {
        this.setState({
            showNotification: false,
        })
    }
    editdetails = (event, value, data) => {
        this.setState({
            showslider : true,
            editslider: true,
            editdata: data
        })
    }
    OnchangeSearchbox = (searchedvalue) => {
        if(isEmpty(searchedvalue)){
            let contactdetails  = [...orginaldetails]
            this.setState({
                contactdetails : contactdetails
            })
        }
        else{
            let contactdetails = [...this.state.contactdetails]
            let filteredData = contactdetails.filter(function (item) {
                if (item["Fullname"]) {
                    return item["Fullname"].toLowerCase().includes(searchedvalue.toLowerCase())
                }
            })
            this.setState({
                contactdetails :filteredData
            })
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <SideBar />
                <div style={{ display: "flex" }}>
                    <SearchBar
                        OnchangeSearchbox={this.OnchangeSearchbox}
                    />
                    <Button
                        name="+ Add Contact"
                        className="Buttonstyle"
                        OnclickAddcontact={this.OnclickAddcontact}
                    />
                </div>

                <div style={{ display: "flex", position: this.state.showslider ? "absolute" : "" }}>
                    <div style={{ width: "60%" }}>
                        <div style={{ margin: " 20px 100px 20px 100px" }}>
                            <table >
                                <tr style={{ backgroundColor: "#dcdcdc" }}>
                                    <th>Basic Info</th>
                                    <th>Company</th>
                                </tr>
                            </table>
                        </div>
                        {map(this.state.contactdetails, (details, index) => {
                            return < Table
                                details={details}
                                index={index}
                                Showinformationcard={this.Showinformationcard}
                                editdetails={this.editdetails}
                            />
                        })
                        }
                    </div>
                    <div style={{ width: "38%" }}>
                        <Card
                            details={this.state.fulldetails}
                            index={this.state.indexval}
                            dataloader={this.state.dataloader}
                            onclickdetails={this.state.onclickdetails}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", position: this.state.showslider ? "relative" : "" }}>
                    {this.state.showslider &&
                        <Modal
                            details={this.state.editdata}
                            show={this.state.showslider}
                            editslider = {this.state.editslider}
                            OnclickCloseModal={this.OnclickCloseModal}
                            OnAddContact={this.OnAddContact}
                            OnEditContact={this.OnEditContact}
                        />
                    }
                </div>

                <div style={{ display: 'flex',justifyContent:"flex-end" }}>
                    {this.state.showNotification &&
                        <Notification
                            message={this.state.showsuccessmessage || this.state.showerrormessage}
                            closeNotification={this.closeNotification}
                        />
                    }
                </div>

                <ChartUI/>
            </div >
        )
    }
}

export default Dashboard