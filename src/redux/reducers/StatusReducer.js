import { GET_ALL_STATUS } from "../../util/constants/settingSystem"

const initialState = {
    arrStatus:[]
}

export const StatusReducer = (state = initialState, action) => {
    switch (action.type) {

    case GET_ALL_STATUS:

        // state.arrStatus = action.arrStatus;
        return { ...state,arrStatus : action.arrStatus }

    default:
        return state
    }
}