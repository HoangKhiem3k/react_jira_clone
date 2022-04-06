import { call, put, takeLatest } from "redux-saga/effects";
import { jiraService } from "../../services/JiraService";
import { GET_ALL_PRIORITY, GET_ALL_PRIORITY_SAGA } from "../../util/constants/settingSystem";

function * getAllPrioritySaga (action){
    try{
        const {data,status} = yield call(()=> jiraService.getAllPriority());
        yield put({type:GET_ALL_PRIORITY, arrPriority:data.content})
    }
    catch(err){
        console.log(err);
    }
}

export function * theoDoiGetAllPriority () {
    yield takeLatest(GET_ALL_PRIORITY_SAGA,getAllPrioritySaga)
}