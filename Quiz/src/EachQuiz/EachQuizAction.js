
import AppConstants from '../AppConstants'
import { GetData } from '../utils'

export const saveanswer = (answer,questionnumber,quizid) => ({
    type: AppConstants.SAVE_ANSWER_WITH_QUESTION_NUMBER,
    payload: { answer,questionnumber ,quizid}
})
export const submitanswer = (submitanswer) => dispatch => {
    GetData.submitanswer(submitanswer).then(res => {
        if (res && res.status === 200) {
            dispatch({
                type: AppConstants.SUBMIT_POST_RESPONSE,
                payload: res.data,
            })
        }
    })
}