import axios from 'axios'

// { 
//     'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',          -----------------------> required, string
//     'content-type': 'application/json'
// }
axios.defaults.headers['auth-token'] = '19c4ff12-e027-4320-b844-2cda768714e8';
axios.defaults.headers[ 'content-type'] = 'application/json';

let url = 'http://100.25.213.184:4060'
let GetData = {
    quizAPI(){
        return axios.get(url+'/api/quiz/all').then(res => res).catch(err => err.response)
    },
    particularAPI(id){
        return axios.get(url+'/api/quiz-questions/all/'+id).then(res => res).catch(err => err.reponse)
    },
    submitanswer (data){
        return axios.post(url + '/api/user/quiz-score',data).then(res =>res).catch(err => err.response)
    }
}
export { GetData }