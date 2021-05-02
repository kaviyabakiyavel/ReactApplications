import AppConstants from '../AppConstants'
import { Map } from 'immutable'
import { saveanswer } from './EachQuizAction'

const initialState = Map({
    submitanswer: {},
    mappings: [],
})

const EachQuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppConstants.SAVE_ANSWER_WITH_QUESTION_NUMBER: {
            let temp = {}
            temp["ques_id"] = action.payload["questionnumber"]
            temp["submitted_option"] = action.payload["answer"]
            let mappings =  [...state.get("mappings")]
            mappings.push(temp)
            let submitanswer = {...state.get('submitanswer')}
            submitanswer.quiz_id = action.payload["quizid"]
            submitanswer.mappings = mappings
            return state.set("mappings", mappings).set('submitanswer',submitanswer)
        }
        case AppConstants.SUBMIT_POST_RESPONSE:{
            return state.set('submitresponse',action.payload)
        }
        default:
            return state
    }
}

export default EachQuizReducer