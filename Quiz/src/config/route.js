import React, { Component } from 'react'
import Quiz from '../Quiz'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import EachQuiz from '../EachQuiz/EachQuiz';
import Anwerkey from '../Answerkey/Answerkey'

class RootNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
        this.updateDimensions = this.updateDimensions.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
    }
    updateDimensions = () => {
        this.setState({
            width: window.innerWidth
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/quiz' component={Quiz}></Route>
                    <Route exact path='/eachquestion' component={EachQuiz}></Route>
                    <Route exact path='/answer'  component={Anwerkey}></Route>
                </Switch>
            </Router>
        )
    }
}

export default RootNav