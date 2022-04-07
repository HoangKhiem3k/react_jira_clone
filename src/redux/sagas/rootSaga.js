import {all} from 'redux-saga/effects';
import * as UserJiraSaga from './UserJiraSaga'
import * as ProjectCategoryJira from './ProjectCategorySaga'
import * as ProjectSaga from './ProjectSaga'
import * as TaskTypeSaga from './TaskTypeSaga'
import * as PrioritySaga from './PrioritySaga'
import * as TaskSaga from './TaskSaga'
import * as StatusSaga from './StatusSaga'
export function * rootSaga(){
    yield all([
        //Nghiệp vụ theo dõi action saga
        UserJiraSaga.theoDoiSignin(),
        UserJiraSaga.theoDoiGetUser(),
        UserJiraSaga.theoDoiAddUserProject(),
        UserJiraSaga.theoDoiRemoveUserProject(),
        UserJiraSaga.theoDoiGetUserByProjectIdSaga(),
        ProjectCategoryJira.theoDoigetAllProjectCategory(),
        ProjectSaga.theoDoiCreateProjectSaga(),
        ProjectSaga.theoDoiGetListProjectSaga(),
        ProjectSaga.theoDoiUpdateProjectSaga(), 
        ProjectSaga.theoDoiDeleteProjectSaga(),
        ProjectSaga.theoDoiGetProjectDetail(),
        ProjectSaga.theoDoiGetAllProjectSaga(),
        TaskTypeSaga.theoDoiGetAllTaskTypeSaga(),
        PrioritySaga.theoDoiGetAllPriority(),
        TaskSaga.theoDoiCreateTaskSaga(),
        TaskSaga.theoDoiGetTaskDetailSaga(),
        TaskSaga.theoDoiUpdateTaskStatusSaga(),
        StatusSaga.theoDoiGetAllStatusSaga(),
    ])
}