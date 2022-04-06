import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk'
import { HistoryReducer } from './reducers/HistoryReducer';
import { UserLoginJiraReducer } from './reducers/UserJiraReducer';
import {ProjectCategoryReducer} from './reducers/ProjectCategoryReducer';
import {ProjectJiraReducer} from './reducers/ProjectJiraReducer';
import {LoadingReducer} from './reducers/LoadingReducer';
import {ProjectReducer} from './reducers/ProjectReducer';
import {TaskTypeReducer} from './reducers/TaskTypeReducer';
import {PriorityReducer} from './reducers/PriorityReducer';
import { StatusReducer } from './reducers/StatusReducer';
import { DrawerReducer } from './reducers/DrawerReducer';
import { TaskReducer } from './reducers/TaskReducer';
//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    //reducer khai báo tại đây
    LoadingReducer,
    HistoryReducer,
    UserLoginJiraReducer,
    ProjectCategoryReducer,
    ProjectJiraReducer,
    DrawerReducer,
    ProjectReducer,
    TaskTypeReducer,
    PriorityReducer,
    StatusReducer,
    TaskReducer,
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

//Gọi saga
middleWareSaga.run(rootSaga);


export default store;