import { coursesConstants } from '../actions/constants';

const IntialState = {
    courses: null,
    fetching:false,
    fetched:false,
    error: null,
}

export default (state = IntialState, action) => {
    switch (action.type) {
        case coursesConstants.GET_COURSES_PAGE_REQUEST:
            state = {
                ...state,
                fetching: true,
            };
            break;
        case coursesConstants.GET_COURSES_PAGE_SUCCESS:
            state = {
                ...state,
                courses: action.payload.courses,
                fetched: true,
                fetching: false
            };
            break;
        case coursesConstants.GET_COURSES_PAGE_FAILURE:
            state = {
                ...state
            };
            break;
    }
    return state;
};