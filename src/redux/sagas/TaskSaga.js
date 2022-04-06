import {call, put,takeLatest} from 'redux-saga/effects'
import { jiraService } from '../../services/JiraService';
import { CLOSE_DRAWER, CREATE_TASK_SAGA, DISPLAY_LOADING, HIDE_LOADING, STATUS_CODE } from '../../util/constants/settingSystem';
import { notifiFunction } from '../../util/Notification/notificationJira';

function* createTaskSaga (action) { 

    try {
        yield put({
            type: DISPLAY_LOADING
        })
        const {data,status} = yield call(()=> jiraService.createTask(action.taskObject));

        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

        }
        yield put({
            type:CLOSE_DRAWER
        })
        notifiFunction('success','Create task successfully !');
    }
    catch(err) {
        console.log(err)
    }
    
    yield put({
        type: HIDE_LOADING
    })
}
export function * theoDoiCreateTaskSaga() {
    yield takeLatest(CREATE_TASK_SAGA,createTaskSaga);
}