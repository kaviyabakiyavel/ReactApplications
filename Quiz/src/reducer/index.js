import {combineReducers} from 'redux';
import QuizReducer from '../QuizReducer'
import EachQuizReducer from '../EachQuiz/EachQuizReducer'

export default combineReducers({
    QuizReducer,
    EachQuizReducer
})