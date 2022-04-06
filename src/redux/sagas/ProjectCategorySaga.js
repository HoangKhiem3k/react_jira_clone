import { takeLatest, call, put } from 'redux-saga/effects';
import { jiraService } from '../../services/JiraService';
import { GET_ALL_PROJECT_CATEGORY, GET_ALL_PROJECT_CATEGORY_SAGA, STATUS_CODE } from '../../util/constants/settingSystem';
function* getAllProjectCategorySaga(action) {
    try {
        // Gọi api 
        const { data, status } = yield call(() => jiraService.getAllProjectCategory());

        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            yield put({ type: GET_ALL_PROJECT_CATEGORY, data: data.content });
        }
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}


export function* theoDoigetAllProjectCategory() {
    yield takeLatest(GET_ALL_PROJECT_CATEGORY_SAGA, getAllProjectCategorySaga)
}