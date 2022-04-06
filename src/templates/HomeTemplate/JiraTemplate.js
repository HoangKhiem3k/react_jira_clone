import React from 'react';
import { Route } from 'react-router-dom';
import SidebarJira from '../../components/Jira/SidebarJira';
import MenuJira from '../../components/Jira/MenuJira';
import ModalJira from '../../components/Jira/ModalJira/ModalJira';

import '../../index.css';



export const JiraTemplate = (props) => {
    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="jira">
                <SidebarJira/> 
                <MenuJira/>

                <Component {...propsRoute} />
                <ModalJira/>
            </div>
        </>
    }} />

}