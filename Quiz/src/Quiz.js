import React, { Component } from 'react'
import './style.css'
import { GetData } from './utils.js';
import { quizAPI,particularAPI } from './QuizAction.js';
import { connect } from 'react-redux';
import map from 'lodash/map';


class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.props.dispatch(quizAPI())
    }
    startbutton = (id) => {
        debugger
        this.props.dispatch(particularAPI(id))
        this.props.history.push({pathname : '/eachquestion',state:{id}});
    }
    render() {
        return (
            <div>
                {map(this.props.Quizdetails, (Quizdetails, index) => { 
                    var buttonclassname = "start-quiz-" + parseInt(index+1) 
                    return < div class="card"  >
                        <div class="container">
                                <div class="col-md-8">
                                    <h3 class="quiz-list-1">{Quizdetails.name}</h3>
                                    <h3 class="quiz-list-2">{Quizdetails.description}</h3>
                                </div>
                                <div class="col-md-2"><button class={buttonclassname} onClick={(evt) => this.startbutton(Quizdetails.id)}>Start</button></div>
                        </div>
                    </div >
                })
                }
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { QuizReducer } = state
    return {
        Quizdetails: QuizReducer.get('Quizdetails'),
        particularquizdetails:QuizReducer.get('particularquizdetails')
    }
}
export default connect(mapStateToProps)(Quiz)