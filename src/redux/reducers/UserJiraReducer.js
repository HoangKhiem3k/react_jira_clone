import { GET_USER_BY_PROJECT_ID, GET_USER_SEARCH, USER_LOGIN, USLOGIN } from "../../util/constants/settingSystem";

let usLogin = {};

if(localStorage.getItem(USER_LOGIN)){
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: usLogin,
    userSearch: [],
    arrUser: [], // Array user cho the select create task
}

export const UserLoginJiraReducer = (state = stateDefault, action) => {
    switch (action.type){
        case USLOGIN:{
            state.userLogin = action.usLogin
            return {...state}
        }
        case GET_USER_SEARCH:{
            state.userSearch = action.lstUserSearch
            return {...state}
        }
        case GET_USER_BY_PROJECT_ID: {
            return {...state,arrUser: action.arrUser} 
        }
        default: return {...state};
    }
}