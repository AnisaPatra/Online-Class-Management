import { authConstants } from '../actions/constants';

const IntialState = {
    token: null,
    user: {
        name: "",
        email: "",
        password: "",
        role: "",
        phoneNumber: "",
        about_me: null,
        city: null,
        country: null,
        hometown: null,
        company: null,
        school: null,
        languages: null,
        gender: null,
        profileImg: null,
    },
    authenticate: false,
    authenticating: false,
    logout:true,
    error: null,
    message: "",
}

export default (state = IntialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            };
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            };
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                logout : false,
            };
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...IntialState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                message:action.payload.message,
                logout : true
            }
            break;
        case authConstants.SIGNUP_REQUEST:
            break;
        case authConstants.SIGNUP_SUCCESS:
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
            break;
    }
    return state;
};