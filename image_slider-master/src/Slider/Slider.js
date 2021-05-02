

import React, { Component } from 'react'
import image1 from '../image/image1.jpg'
import image2 from '../image/image2.jpg'
import image3 from '../image/image3.jpg'
import image4 from '../image/image4.jpg'
import './Sliderstyle.css'
import map from 'lodash/map'


// Slide  functional component
const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}

//Previous Button functional component
const PreviousButton = (props) => {
    return (
        <div className="backArrow" onClick={props.goPrevslide}>
            <button className="btn btn-1"><i className="arrow left"></i><span className="labelstyle">Previous</span></button>
        </div>
    )
}

//Next Button functional component
const NextButton = (props) => {
    return (
        <div className="nextArrow " onClick={props.goNextslide}>
            <button className="btn btn-1"><span className="labelstyle">Next</span><i className="arrow right"></i></button>
        </div>
    )
}

// slider classcomponent 
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                image1,
                image2,
                image3,
                image4,
            ],
            currentIndex: 0,
            translateValue: 0,
        }
    }

    //component did mount lifecycle method 
    componentDidMount() {
        this.countdown = setInterval(this.goNextslide, 4000)
    }
    
    //componentillunmount lifecycle method
    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    //arrow function to find out the width , queryselector means find out the first element 
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    //arrow function  for nextbutton 
    goNextslide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            clearInterval(this.countdown)
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            translateValue: this.state.translateValue + -(this.slideWidth())
        })

    }

    //arrow function for previous button
    goPrevslide = () => {
        if (this.state.currentIndex === 0)
            return;
        this.setState({
            currentIndex: this.state.currentIndex - 1,
            translateValue: this.state.translateValue + this.slideWidth()
        })
    }

    render() {
        return (
            <div className="slider" data-interval="3000">
                <div className="slider-wrapper"
                    style={{
                        transform: "translateX" + "(" + (this.state.translateValue + "" + "px") + ")",
                        transition: 'transform ease-out 0.45s'
                    }}
                >
                    {
                        map(this.state.images, (image, index) => {
                            return <Slide key={index} image={image} />
                        })
                    }
                </div>
                <PreviousButton goPrevslide={this.goPrevslide} />
                <NextButton goNextslide={this.goNextslide} />
            </div>
        )
    }
}
export default Slider