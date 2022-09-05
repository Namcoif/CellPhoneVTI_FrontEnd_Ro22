import actionTypes from "../constant/constant";

const initialState = {
    isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.REGISTER_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.REGISTER_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMessageRegister: action.payload
            }

        case actionTypes.SIGNIN_FAIL:
            return {
                ...state,
                isLoggedIn: false
            }
        case actionTypes.SIGNIN_REQUEST:
            return {
                ...state,
                isLoggedIn: false
            }
        case actionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }

        default:
            return state;
    }
}

export default userReducer;