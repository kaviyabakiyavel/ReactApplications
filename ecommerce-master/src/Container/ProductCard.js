import React, { Component } from 'react'
import Card from '../Components/Card'
import { map } from 'lodash';
import cx from 'classnames'
import '../Style/style.css'
import { FaDumbbell } from 'react-icons/fa';

class ProductCard extends Component {
    constructor() {
        super();
        this.state = {
            dataarray: [],
            loading: false,
            page: 0,
            prevY: 0,
        };
    }
    componentDidMount() {
        
        // this.setState({
        //     dataarray: this.props.carddata
        // })
        this.getdata(0)
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        }
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef)
    }
    componentDidUpdate(prevProps) {
        
        if (this.props.carddata !== prevProps.carddata) {
            
            this.setState({
                dataarray: this.props.carddata
            })
        }
    }
    handleObserver(entities, observer) {
        
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            const lastindex = this.state.dataarray.length;
            this.getdata(lastindex);
        }
        this.setState({
            prevY: y
        })
    }
    getdata = (id) => {
        let newdataarray = []
        let data = [...this.props.carddata]
        newdataarray = data.slice(id, id + 20)
        let renderarray = [...this.state.dataarray].concat(newdataarray)
        this.setState({
            dataarray: renderarray
        })
    }
    render() {
        console.log("this.props.carddata", this.props.carddata)
        console.log("this.state.dataarray", this.state.dataarray)
        //Additional css
        const loadingCSS = {
            height: "100px",
            margin: "30px"
        };

        //To change the loading icon behavious
        const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

        return (
            <div className="container">
                <div style={{ minHeight: "800px" }} class={cx("row", "content")} style={{ paddingTop: "50px" }}>
                    {
                        map(this.state.dataarray, (data, index) => {
                            return < div class="col-md-4" style={{ paddingTop: "16px", paddingBottom: "16px" }} >
                                {/* {data.avlble !== 0 && */}
                                <Card
                                    id={data.id}
                                    image={data.image}
                                    product={data.product}
                                    description={data.description}
                                    price={data.price}
                                    currency={data.currency}
                                    full_description={data.full_description}
                                    additional_image={data.additional_image}
                                    brand={data.brand}
                                    jew_size={data.jew_size}
                                    avlble={data.avlble}
                                />
                                {/* } */}

                            </div>
                        })
                    }
                    <div
                        ref={loadingRef => (this.loadingRef = loadingRef)}
                        style={loadingCSS}
                        style={{ color: "red" }}
                    >
                        <span style={loadingTextCSS}>Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard