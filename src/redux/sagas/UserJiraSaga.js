import {delay, put, takeLatest,call} from 'redux-saga/effects';
import { jiraService } from "../../services/JiraService";
import { ADD_USER_PROJECT_API, DISPLAY_LOADING, GET_LIST_PROJECT_SAGA, GET_USER_API, GET_USER_BY_PROJECT_ID, GET_USER_BY_PROJECT_ID_SAGA, GET_USER_SEARCH, HIDE_LOADING, REMOVE_USER_PROJECT_API, STATUS_CODE, TOKEN, USER_LOGIN, USER_SIGNIN_API, USLOGIN } from "../../util/constants/settingSystem";
import {history} from '../../util/history'
// Quản lý các action saga

function * signinSaga(action) {
    console.log(action);
    yield delay(500);
    yield put({
        type: DISPLAY_LOADING,
    })
    // Goi api
    try {
        const {data} = yield call(() => jiraService.signinJira(action.userLogin) ) 
        // Lưu vào localStorage khi đăng nhập thành công
        localStorage.setItem(TOKEN,data.content.accessToken);
        localStorage.setItem(USER_LOGIN,JSON.stringify(data.content));

        yield put({
            type: USLOGIN,
            userLogin: data.content
        })
        // let history = yield select(state => state.HistoryReducer.history);
        history.push('/projectmanagement');

    }catch (err) {
        console.log(err.response.data);
    }
    yield put({
        type: HIDE_LOADING
    })
}

export function * theoDoiSignin(){
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}




function* getUserSaga(action) {


    //Gọi api 
    try {
        const { data } = yield call(() => jiraService.getUser(action.keyWord));

        yield put({
            type:GET_USER_SEARCH,
            lstUserSearch: data.content
        })
    //     console.log(action.keyWord)
    //   console.log('datasearch:',data)
    }catch(err){ 
        console.log(err.response.data)
    }
}



export function* theoDoiGetUser () {
    yield takeLatest(GET_USER_API, getUserSaga);
}

//Quản lý các action saga
function* addUserProjectSaga(action) {
    
   
    try {
        yield call(() => jiraService.assignUserProject(action.userProject));
        
        yield put({
            type:GET_LIST_PROJECT_SAGA
        })
      
    }catch(err){ 
        console.log(err.response.data)
    }
}



export function* theoDoiAddUserProject () {
    yield takeLatest(ADD_USER_PROJECT_API, addUserProjectSaga);
}

function* removeUserProjectSaga(action) {
    
   
    try {
        yield call(() => jiraService.deleteUserFromProject(action.userProject));
        
        yield put({
            type: GET_LIST_PROJECT_SAGA
        })
      
    }catch(err){ 
        console.log(err.response.data)
    }
}



export function* theoDoiRemoveUserProject () {
    yield takeLatest(REMOVE_USER_PROJECT_API, removeUserProjectSaga);
}

function* getUserByProjectIdSaga(action) {
    const { idProject } = action;
    console.log('action',idProject)

    try {
        const { data, status } = yield call(() => jiraService.getUserByProjectId(idProject));
        console.log('checkdata',data);

        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_USER_BY_PROJECT_ID,
                arrUser:data.content
            })
        }

    } catch (err) {
        console.log(err);
        console.log(err.response?.data);
        if(err.response?.data.statusCode === STATUS_CODE.NOT_FOUND) {
            yield put({
                type:GET_USER_BY_PROJECT_ID,
                arrUser:[]
            })
        }
    }
}



export function* theoDoiGetUserByProjectIdSaga() {
    yield takeLatest(GET_USER_BY_PROJECT_ID_SAGA, getUserByProjectIdSaga)
}