import { call, put, takeLatest } from "redux-saga/effects";
import { jiraService } from "../../services/JiraService";
import { GET_ALL_STATUS, GET_ALL_STATUS_SAGA } from "../../util/constants/settingSystem";

function * getAllStatusSaga (action) {

    try {
        const {data} = yield call(()=> jiraService.getAllStatus());

        yield put({
            type: GET_ALL_STATUS,
            arrStatus:data.content
        })


    }catch(err) {
        console.log(err);
        console.log(err.response?.data)
    }

}



export function *theoDoiGetAllStatusSaga() {

    yield takeLatest(GET_ALL_STATUS_SAGA, getAllStatusSaga)

}