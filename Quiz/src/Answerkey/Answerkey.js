import React, { Component } from 'react'
import '../style.css'
import map from 'lodash/map';
import { connect } from 'react-redux';


class Anwerkey extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        
        return (
            <div>
                <h3 class="score">Your score is : {this.props.submitresponse && this.props.submitresponse["score"]}</h3>
                <div class="card" style={{ height: "500px" }}>
                    <div class="Headerstyle">Answer</div>
                    <div class="container">
                        {map(this.props.submitresponse && this.props.submitresponse["questions"], (eachanswerkey, index) => {
                            let ques = "question-" + parseInt(index + 1)
                            let youranswer = "submitted-answer-" + parseInt(index + 1)
                            let correctanswer = "correct-answer-" + parseInt(index + 1)
                            let questiondecription = this.props.particularquizdetails &&this.props.particularquizdetails["questions"][index]["name"]
                            return <div key={index} style={{ padding: "8px 16px",borderBottom:"1px solid #dcdcdc",width:"980px" }}>
                                <div class={ques}>Questions : {eachanswerkey["ques_id"]} . {questiondecription}</div>
                                <div class={youranswer}>Your Answer : {eachanswerkey["submitted_option"]}  </div>
                                <div class={correctanswer}>Correct Answer :{eachanswerkey["correct_option"]}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { QuizReducer,EachQuizReducer } = state
    return {
        particularquizdetails: QuizReducer.get('particularquizdetails'),
        submitresponse: EachQuizReducer.get("submitresponse"),
    }
}
export default connect(mapStateToProps)(Anwerkey)