import React, { Component } from 'react';
import ProductCard from './ProductCard'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import data from '../Data/data.json'
import {isEmpty} from 'lodash'

class Ecommerce extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carddata: []
        }
    }
    componentWillMount() {
        this.setState({
            carddata: [...data]
        })
    }
    Applyfilter = (selectedPrice, selectedCategory) => {
        
        let Masterdata = [...data]
        console.log("Masterdata",Masterdata)
        // it will check each element 
        let pricearray = Masterdata.filter(function (item) {
            //it will filter from 0 to selectprice
            return item.price <= selectedPrice && item.price >= 0
        })
        //console.log("pricearray", pricearray)
        let categoryarray = pricearray.filter(function (item) {
            return selectedCategory.indexOf(item.category) > -1;
        });
        //console.log("categoryarray", categoryarray)
        this.setState({
            carddata: categoryarray
        })
    }
    dynamicSearch = (searchedvalue) => {
        
        let temp = [...this.state.carddata]
        let searchedArray = temp.filter(function (item) {
            if (!isEmpty(item["category"])) {
                return item["category"].toLowerCase().includes(searchedvalue.toLowerCase())
            }
        })
        this.setState({
            carddata: searchedArray
        })
    }
    render() {
        console.log("carddata",this.state.carddata)
        return (
            <div>
                <Navbar
                    dynamicSearch={this.dynamicSearch}
                />
                <Sidebar
                    Applyfilter={this.Applyfilter}
                />
                <ProductCard
                    carddata={this.state.carddata}
                />
            </div>
        )
    }
}

export default Ecommerce