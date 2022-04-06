import React,{useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import {  Layout } from 'antd';

const { Sider, Content } = Layout;

export const UserLoginTemplate = (props) => {

    const [size,setSize] = useState({width: window.innerWidth, height: window.innerHeight});
    useEffect(() => {
        window.onresize =() =>{
            setSize({width: Math.round(window.innerWidth), height: Math.round(window.innerHeight)})
        }
    },[])

    let { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider width={size.width/2} style={{ height:size.height, backgroundImage: 'url(https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg)' }}>
                </Sider>
                <Content >
                    <Component {...restRoute} />
                </Content>
               
            </Layout>

        </>
    }} />

}


