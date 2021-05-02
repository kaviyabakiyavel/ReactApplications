import React, { Component } from 'react'
import '../Style/style.css'
import cx from 'classnames'
import { isEmpty } from 'lodash'
import { MdClear } from "react-icons/md";

class CollapseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: false
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.view !== prevProps.view) {
            this.setState({
                view: this.props.view
            })
        }
    }
    cancelCollapse = () => {
        this.setState({
            view: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.view == true &&
                    <div class={cx("card", "box")} style={{ width: "312%", }}>
                        <div style={{ padding: "8px", display: "flex" }}>
                            <div onClick={this.cancelCollapse} style={{ cursor: "pointer" }}><MdClear size={24} /></div>
                        </div>
                        <div>
                            <span style={{ fontWeight: "700", fontSize: "16px", paddingLeft: "4px" }}>{this.props.product}</span>
                        </div>
                        <div class="row ">
                            <div class="col-md-5">
                                <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
                                        <li data-target="#CarouselTest" data-slide-to="1"></li>
                                        <li data-target="#CarouselTest" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block" src={this.props.additional_image} alt="" style={{ width: "100%" }} />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block" src={this.props.additional_image} alt="" style={{ width: "100%" }} />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block" src={this.props.additional_image} alt="" style={{ width: "100%" }} />
                                        </div>
                                        <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 px-3" style={{ display: "flex", justifyContent: "flex-start" }}>
                                <div class="card-block px-6" style={{ textAlign: "justify" }}>
                                    <p class="productid">{this.props.id} - {this.props.brand}</p>
                                    <p style={{ fontSize: "18px", fontFamily: "serif" }}>
                                        <span>{this.props.description}</span><br />
                                        <span class="Chipstyle">{this.props.currency ? "₹" : "$"} {this.props.price}</span>
                                    </p>
                                    <p>
                                        <span>{this.props.full_description}</span>
                                        <span class="LinkFinoutmore">Find Out More</span>
                                    </p>
                                    <p >{!isEmpty(this.props.jew_size) ? "Jewellery Size -" + "" + this.props.jew_size : ""}</p>
                                    <p >Only {this.props.avlble} left in Stock</p>

                                    <a href="#" class="mt-auto btn btn-primary  ">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CollapseComponent