import React from 'react'
import { Button, Input } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
import {withFormik} from 'formik'
import * as Yup from 'yup'
import {connect} from 'react-redux';
import { signinAction } from '../../redux/actions/JiraActions';
function Login(props) {
    const {
        errors,
        handleChange,
        handleSubmit,
      } = props;

    return (
        <form onSubmit={handleSubmit} className="container" style={{ height: window.innerHeight }} >
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: window.innerHeight }} >
            <h3 className="text-center" style={{fontWeight:300,fontSize:35}}> </h3>
            <div className="d-flex mt-3" >
                <Input onChange={handleChange} style={{ width: '100%', minWidth: 300 }} name="email" size="large" placeholder="email" prefix={<UserOutlined />} />     
            </div> 
            <div className="text-danger">{errors.email}</div>
            <div className="d-flex mt-3">
                <Input onChange={handleChange} style={{ width: '100%', minWidth: 300 }} type="password" name="password" size="large" placeholder="password" prefix={<LockOutlined />} />
            </div>
            <div className="text-danger">{errors.password}</div>

            <Button htmlType="submit" size="large" style={{ minWidth: 300, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-5">Login</Button>


            <div className="social mt-3 d-flex">
                <Button style={{backgroundColor:'rgb(59,89,152)'}}  shape="circle" size={"large"}>
                    <span className="font-weight-bold" style={{color:'#fff'}} ><i className="fab fa-facebook-f"></i></span>
                </Button>
                <Button style={{backgroundColor:'rgb(221,75,57)'}} type="primary ml-3" shape="circle" icon={<GoogleOutlined />}  size={"large"}>

                </Button>
            </div>
        </div>

    </form>
    )
}
const LoginWithFormik =  withFormik({
    mapPropsToValues: () => ({
        email: '', 
        password:''
    }),
    validationSchema: Yup.object().shape({
        email:Yup.string().required('Email is required!').email('email is invalid!'),
        password:Yup.string().min(6,'password must have min 6 characters').max(32,'password  have max 32 characters')

    }),
    handleSubmit: (values, {props,setSubmitting} ) => {
        console.log(values);
        console.log(props); 
        setSubmitting(true);
        props.dispatch(signinAction(values.email,values.password));
    },
    displayName: 'Login',
  })(Login);




export default connect()(LoginWithFormik);