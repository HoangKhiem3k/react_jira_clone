import React from "react"
import { CLOSE_DRAWER, OPEN_DRAWER, OPEN_FORM_CREATE_TASK, OPEN_FORM_EDIT_PROJECT, SET_SUBMIT_CREATE_TASK, SET_SUBMIT_EDIT_PROJECT } from "../../util/constants/settingSystem"

const initialState = {
    visible: false,
    title: '',
    ComponentContentDrawer: <p>default contnent</p>,
    callBackSubmit: (propsValue) => { alert('default callBackSubmit') }
}

export const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {

        case OPEN_DRAWER:
            return { ...state, visible: true }
        case CLOSE_DRAWER:
            return { ...state, visible: false }
        case OPEN_FORM_EDIT_PROJECT:
            return { ...state, visible: true, ComponentContentDrawer: action.Component, title: action.title}
        case SET_SUBMIT_EDIT_PROJECT:{
            state.callBackSubmit = action.submitFunction 
            return { ...state} 
        }
        case OPEN_FORM_CREATE_TASK:
            return {...state, visible:true, ComponentContentDrawer: action.ComponentContentDrawer, title: action.title }
        case SET_SUBMIT_CREATE_TASK:{
            return { ...state, callBackSubmit: action.submitFunction }
        }
        default: 
            return { ...state }
    }
}
