import { takeLatest, call, put,delay } from 'redux-saga/effects';
import { jiraService } from '../../services/JiraService';
import { CREATE_PROJECT_SAGA, DELETE_PROJECT_SAGA, DISPLAY_LOADING, GET_ALL_PROJECT, GET_ALL_PROJECT_SAGA, GET_LIST_PROJECT, GET_LIST_PROJECT_SAGA, GET_PROJECT_DETAIL, GET_USER_BY_PROJECT_ID_SAGA, HIDE_LOADING, PUT_PROJECT_DETAIL, STATUS_CODE, UPDATE_PROJECT_SAGA } from '../../util/constants/settingSystem';
import {history} from '../../util/history';
import {notifiFunction} from '../../util/Notification/notificationJira'
function* createProjectSaga(action) {
    console.log('action createProjectSaga');
    //Hien thi loading

    yield put({ 
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        // Gọi api 
        const { data, status } = yield call(() => jiraService.createProjectAuthorization(action.newProject));

        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            history.push('/projectmanagement');
        }
    } catch (err) {
        console.log(err);
    }
    yield put({ 
        type: HIDE_LOADING
    })
}
export function* theoDoiCreateProjectSaga() {
    yield takeLatest(CREATE_PROJECT_SAGA, createProjectSaga)
}

//Saga dùng để get all project từ api 

function *getListProjectSaga(action) { 

    try {
        const {data,status} = yield call( () => jiraService.getListProject());
 
        //Sau khi lấy dữ liệu từ api về thành công
        if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_LIST_PROJECT,
                projectList:data.content
            })
            
        }
    }catch(err) {
        console.log(err)
    }

}
export function* theoDoiGetListProjectSaga() {
    yield takeLatest(GET_LIST_PROJECT_SAGA, getListProjectSaga);
}

//UpdateProject
function* updateProjectSaga(action) {
    // console.log('action123',action);
    // return;
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay (500);

    try {

        
        const { data, status } = yield call(() => jiraService.updateProject(action.prjectUpdate));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        }
        // yield put({
        //     type:'GET_LIST_PROJECT_SAGA'
        // })
        yield call(getListProjectSaga);
        yield put({
            type:'CLOSE_DRAWER'
        })
    } catch (err) {
        console.log(err);
    }
   
    yield put({
        type: HIDE_LOADING
    })
}
export function* theoDoiUpdateProjectSaga() {
    yield takeLatest(UPDATE_PROJECT_SAGA, updateProjectSaga);
}

//Delete Project
function* deleteProjectSaga(action) {
    // console.log('action123',action);
    // return;
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay (500);

    try {
        const { data, status } = yield call(() => jiraService.deleteProject(action.projectId));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            notifiFunction('success','Delete project successfully !')

            // history.push('/projectmanagement');
        }else {
            notifiFunction('error','Delete project fail !')
        }
        // yield put({
        //     type:'GET_LIST_PROJECT_SAGA'
        // })
        yield call(getListProjectSaga);
        yield put({
            type:'CLOSE_DRAWER'
        })
    } catch (err) {
        notifiFunction('error','Delete project fail !')
        console.log(err);
    }
   
    yield put({
        type: HIDE_LOADING
    })
}


export function* theoDoiDeleteProjectSaga() {
    yield takeLatest(DELETE_PROJECT_SAGA, deleteProjectSaga);
}


function* getProjectDetailSaga(action) {
    // console.log('action123',action);
    // return;
    //HIỂN THỊ LOADING
    // yield put({
    //     type: DISPLAY_LOADING
    // })
    yield delay (500);

    try {
        const { data } = yield call(() => jiraService.getProjectDetail(action.projectId));
        
        console.log('data',data);
        //Lấy dữ liệu thành công thì đưa dữ liệu lên redux
        yield put({
            type:PUT_PROJECT_DETAIL,
            projectDetail:data.content
        })
    
    } catch (err) {
        console.log('404 not found !')
        history.push('/projectmanagement');
    }
   
    // yield put({
    //     type: HIDE_LOADING
    // })
}

export function* theoDoiGetProjectDetail() {
    yield takeLatest(GET_PROJECT_DETAIL, getProjectDetailSaga);
}

function* getProjectAllSaga(action) {
    // console.log('action123',action);
    // return;
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay (500);

    try {
        const { data } = yield call(() => jiraService.getAllProject());
        
      
        //Lấy dữ liệu thành công thì đưa dữ liệu lên redux
        yield put({
            type: GET_ALL_PROJECT,
            arrProject:data.content
        })
        yield put({
            type: GET_USER_BY_PROJECT_ID_SAGA,
            idProject:data.content[0]?.id
        })
    
    } catch (err) {
        console.log('404 not found !')
        history.push('/projectmanagement');
    }
   
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiGetAllProjectSaga() {
    yield takeLatest(GET_ALL_PROJECT_SAGA, getProjectAllSaga);
}