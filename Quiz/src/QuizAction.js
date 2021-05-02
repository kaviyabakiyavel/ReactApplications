import { GetData } from './utils'
import AppConstants from './AppConstants'

export const quizAPI = () => dispatch =>  {
    dispatch({
        type: AppConstants.SET_QUIZE_API_LOADER,
        payload: true
    })
    GetData.quizAPI().then(res => {
        if (res && res.status === 200) {
            dispatch({
                type: AppConstants.SET_QUIZE_API,
                payload: res.data,
            })
        } else {
            dispatch({
                type: AppConstants.SET_QUIZE_API,
                payload: [],
            })
        }
        dispatch({
            type: AppConstants.SET_QUIZE_API_LOADER,
            payload: false
        })
    })
}

export const particularAPI = (id) => dispatch  => {
    GetData.particularAPI(id).then(res => {
        if(res && res.status == 200){
            dispatch({
               type:AppConstants.GET_PARTICULAR_QUIZ,
               payload:res.data,
            })
        }else{
            dispatch({
                type:AppConstants.GET_PARTICULAR_QUIZ,
                payload:[],
             })
        }
    })
}