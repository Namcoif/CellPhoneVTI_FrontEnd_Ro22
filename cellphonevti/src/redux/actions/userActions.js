import actionTypes from "../constant/constant"
import axios from 'axios'

const registerUser = (user) => async (dispatch) => {
    dispatch({
        type: actionTypes.REGISTER_USER_REQUEST
    })
    try {
        const response = await axios.post('api/auth/signup', {
            ...user
        })
        dispatch({
            type: actionTypes.REGISTER_USER_SUCCESS,
            payload: response.data
        })
        console.log(response);

        window.location.replace('/sign-in')
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_USER_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Register user fail"
            }
        })
    }
}

const signIn = (username, password) => async (dispatch) => {
    dispatch({
        type: actionTypes.SIGNIN_REQUEST
    })

    try {
        const response = await axios.post('api/auth/signin', {
            username: username,
            password: password
        })
        console.log(response.data)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('role', response.data.role)
        localStorage.setItem('login', true)
        dispatch({
            type: actionTypes.SIGNIN_SUCCESS,
            payload: response.data
        })
        window.location.replace("/")
    } catch (error) {
        dispatch({
            type: actionTypes.SIGNIN_FAIL,
            payload: {
                statusCode: error.tatus,
                message: "Signin fail! Please check your Username and Password"
            }
        })
    }
}

const userActions={
    registerUser,
    signIn
}

export default userActions