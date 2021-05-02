import React, { Component } from 'react'
import cx from 'classnames'
import '../Style/style.css'
import Collapse from './Collapse';
import {Button } from 'react-bootstrap';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: false
        }
    }
    opencollapse = (evt) => {
        this.setState({
            view: true
        })
    }
    render() {
        return (
            <div testid="card">
                <div class={cx("card", "box")} style={{ border: "0px", backgroundColor: "#f8f8f8", width: "90%", height: "100%", fontSize: "16px" }}>
                    <div class="card-body" style={{ padding: "0px" }}>
                        <img src={this.props.image}  alt="" style={{ width: "100%" }} />
                    </div>
                    <div class="card-footer" style={{ backgroundColor: "#373737", color: '#fff', borderTop: "0px", }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ fontSize: "12px", color: "gold", textTransform: "uppercase", }}>{this.props.product}</div>
                            <div style={{ fontSize: "12px", color: "gold", }}> {this.props.currency ? "₹" : "$"} {this.props.price}</div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ paddingTop: "8px", fontSize: "10px", textAlign: 'justify', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{this.props.description}</div>
                        </div>
                        <div style={{ display: "flex", margin: "12px 0px" }}>
                            <Button color="primary" onClick={this.opencollapse} aria-expanded={this.state.view} style={{ padding: "4px 12px", fontSize: "14px" }}>Quick View</Button>
                        </div>
                    </div>
                </div>
                <Collapse
                    id = {this.props.id}
                    view={this.state.view}
                    price={this.props.price}
                    currency = {this.props.currency}
                    product = {this.props.product}
                    description = {this.props.description}
                    full_description = {this.props.full_description}
                    additional_image={this.props.additional_image}
                    brand = {this.props.brand}
                    jew_size = {this.props.jew_size}
                    avlble = {this.props.avlble}
                />
            </div>

        )
    }
}
export default Card