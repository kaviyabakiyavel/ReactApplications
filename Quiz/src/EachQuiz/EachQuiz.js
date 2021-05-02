import React, { Component } from 'react'
import '../style.css'
import map from 'lodash/map';
import { GetData } from '../utils';
import { connect } from 'react-redux';
import {saveanswer,submitanswer} from './EachQuizAction'

class EachQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    OnchangeRadiobutton = (event, questionnumber,quizid) => {
        this.props.dispatch(saveanswer(event.target.value,questionnumber,quizid))
    }
    submitanswer = () => {
       this.props.dispatch(submitanswer(this.props.submitanswer))
       this.props.history.push({pathname : '/answer'});
    }
    render() {
        var quizid = this.props.history.location.state.id
        return (
            <div>
                {/* first map render the question */}
                {map(this.props.particularquizdetails["questions"], (eachquestion, index) => {
                    console.log("eachquestion",eachquestion)
                    let questionnumber = this.props.particularquizdetails["questions"][index]["id"]
                    let options = eachquestion.options
                    let optionarr = options.split(',')
                    return <div class="card" key={index} style={{ height: "200px" }}>
                        <div class="container">
                            <div class="question">{questionnumber} . {eachquestion.name}</div>
                            <div class="col-md-8" style={{ padding: "16px" }}>
                                {/* second map render the option  */}
                                {map(optionarr, (option, index2) => {
                                    let answer = "answer" + index
                                    let optionname = 'answer-value-' + parseInt(index2 + 1)
                                    return <div className={optionname} onChange={(evt) => this.OnchangeRadiobutton(evt, questionnumber,quizid)} key={index}>
                                        <input type="radio" name={answer} id={option} value={option} />
                                        <label style={{ margin: "5px 12px 5px 12px" }} id={parseInt(this.props.index2 + 1)}>{option}</label><br />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                })
                }
                <div><button class="start-quiz-1" onClick={this.submitanswer}>Submit</button></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { QuizReducer,EachQuizReducer } = state
    return {
        Quizdetails: QuizReducer.get('Quizdetails'),
        particularquizdetails: QuizReducer.get('particularquizdetails'),
        submitanswer : EachQuizReducer.get('submitanswer'),
        submitresponse : EachQuizReducer.get("submitresponse"),
    }
}
export default connect(mapStateToProps)(EachQuiz)