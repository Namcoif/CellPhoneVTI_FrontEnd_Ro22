
import { MdAccountCircle } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom'

import './Signin.css'
import { connect } from "react-redux";

import React from 'react';
import { useState } from "react";
import FormGroup from '../../../_sharecomponents/formgroup/FormGroup';
import CustomInput from '../../../_sharecomponents/custominput/CustomInput';
import CustomCheckBox from './../../../_sharecomponents/customcheckbox/CustomCheckBox';
import CustomButton from '../../../_sharecomponents/custombutton/CustomButton';
import userActions from './../../../redux/actions/userActions';

function Signin(props) {

    const [userSignIn, setUserSignIn] = useState({
        username: '',
        password: '',
        rememberMe: false
    })

    const navigate= useNavigate();


    const _handleOnChangeInput = (name, value) => {
        setUserSignIn({
            ...userSignIn,
            [name]: value
        })

    }

    const _handleCheckBox = (checked) => {
        setUserSignIn({
            ...userSignIn,
            rememberMe: checked
        })
    }

    const _handleSubmitForm = (e) => {
        console.log(userSignIn);
        props.signIn(userSignIn.username, userSignIn.password)
        // navigate("/",{replace:true})

        
        
    }

    return (
        <div className="signin-container">
            <div className="signin-header">
                <div className="signin-avatar" >
                    <MdAccountCircle size='24px' />

                </div>
                <h1>Sign In</h1>
            </div>
            <div className="signin-main">
                <FormGroup>
                    <CustomInput
                        type='text'
                        value={userSignIn.username}
                        label='Username *'
                        name='username'
                        getData={_handleOnChangeInput}
                    />
                </FormGroup>
                <FormGroup >
                    <CustomInput
                        type='password'
                        name='password'
                        label='Password *'
                        value={userSignIn.password}
                        getData={_handleOnChangeInput}
                    />
                </FormGroup>

                <CustomCheckBox
                    label='Remember me'
                    onCheckBox={_handleCheckBox}
                    fontSize='24px'
                    rememberMe={userSignIn.rememberMe}
                />
                <div>
                    <CustomButton
                        type='submit'
                        uppercase='uppercase'
                        onClick={_handleSubmitForm}
                    >
                        Sign in
                    </CustomButton>
                </div>
                <div className="group-link">
                    <Link to='forgot-password'>Forgot your password?</Link>
                    <Link to='/sign-up'>Don't have an account? Sign up</Link>
                </div>

            </div>
            <div className="copy-right">
                Copyright&nbsp;&copy;&nbsp;
                <Link to='/'>your website</Link>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return{
        // errorMessageSignin:state.userGetInfo.errorMessageSignin
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signIn: (username, password) => {
            dispatch(userActions.signIn(username, password))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)