import React, { Component } from 'react'
import '../Style/style.css'
import { FaHome } from "react-icons/fa";
import { map, isEmpty } from 'lodash';
import RangeSlider from './RangeSlider'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //Category: "",
            selectedCategory: ["tq-mia-collections", "tq-mia-category", "Mia", "Collections", "Silver", "Jewellery", "Jeweller"],
            listofcategory: ["tq-mia-collections", "tq-mia-category", "Mia", "Collections", "Silver", "Jewellery", "Jeweller"],
            selectedPrice: 100000,
        }
    }
    onclickcheckbox = (evt) => {
        
        let checkboxvalue = [...this.state.selectedCategory]
        //find index of the selected or unselected checkbox
        const index = checkboxvalue.indexOf(evt.currentTarget.id)
        //if index greater then -1 go inside the condition 
        if (index > -1) {
            
            // if (evt.currentTarget.checked == false) {
            //     
                checkboxvalue.splice(index, 1)
            // }
           
        }
        else {
            
            checkboxvalue.push(evt.currentTarget.id)
        }
        this.setState({
            selectedCategory: checkboxvalue
        })
    }
    onclickrangeslider = (value) => {
        this.setState({
            selectedPrice: value
        })
    }
    Applyfilter = () => {
        this.props.Applyfilter(this.state.selectedPrice, this.state.selectedCategory)
    }

    render() {
        return (
            <div class="sidebar" style={{ marginTop: "50px" }}>
                <a className="sidebartitle">CATEGORIES</a>
                <div style={{ textAlign: "justify" }}>
                    {
                        map(this.state.listofcategory, (EachCategory, index) => {
                            if (this.state.selectedCategory.indexOf(EachCategory) > - 1) {
                                return <div style={{ padding: "2px 20px" }}>
                                    <input type="checkbox" id={EachCategory} name={EachCategory} value={EachCategory} onClick={this.onclickcheckbox} checked />
                                    <label style={{ fontSize: "14px", color: "#fff", padding: "0px 8px" }}>{EachCategory}</label>
                                </div>
                            }
                            else {
                                return <div style={{ padding: "2px 20px" }}>
                                    <input type="checkbox" id={EachCategory} name={EachCategory} value={EachCategory} onClick={this.onclickcheckbox} />
                                    <label style={{ fontSize: "14px", color: "#fff", padding: "0px 8px" }}>{EachCategory}</label>
                                </div>
                            }
                        })
                    }
                </div>
                <a className="sidebartitle">PRICE</a>
                <RangeSlider
                    Rangeslider={this.onclickrangeslider}
                />
                <button class="Greenbutton" onClick={this.Applyfilter}>Go</button>
            </div>
        )
    }
}
export default Sidebar