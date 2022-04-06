import { call, put, takeLatest } from "redux-saga/effects";
import { jiraService } from "../../services/JiraService";
import { GET_ALL_TASK_TYPE, GET_ALL_TASK_TYPE_SAGA } from "../../util/constants/settingSystem";

function * getAllTaskTypeSaga (action) {

    try {
        const {data,status} = yield call(()=> jiraService.getAllTaskType());

        yield put({
            type: GET_ALL_TASK_TYPE,
            arrTaskType:data.content
        })



    }catch (err) {
        console.log(err);
    }



}


export function * theoDoiGetAllTaskTypeSaga () {
    yield takeLatest(GET_ALL_TASK_TYPE_SAGA,getAllTaskTypeSaga)
}