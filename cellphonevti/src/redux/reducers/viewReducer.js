import actionTypes from "../constant/constant";

const initialState={
    isOpenSidebar:true,

}

const viewReducer =(state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.TOGGLE_SIDEBAR:
            return{
                ...state,
                isOpenSidebar: !state.isOpenSidebar
            }
    
        default:
            return state;
    }
}

export default viewReducer;