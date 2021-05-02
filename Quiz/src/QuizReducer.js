import AppConstants from './AppConstants'
import {Map} from 'immutable'

const initialState = Map({
    Quizdetails : [],
    particularquizdetails:[],
})

const QuizReducer = (state = initialState,action) => {
    switch(action.type){
        case AppConstants.SET_QUIZE_API:{
          return state.set("Quizdetails",action.payload)
        }
        case AppConstants.GET_PARTICULAR_QUIZ:{
          return state.set('particularquizdetails',action.payload)
        }
        default: 
          return state
    }
}

export default QuizReducer