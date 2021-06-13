import { coursesConstants } from "./constants";
import axios from '../axios';

export const getCourses = () => {
    return async (dispatch) => {
    let response;
    dispatch({ type: coursesConstants.GET_COURSES_PAGE_REQUEST });
    response = await axios.get(`/courses`);
    if (response.status === 200) {
        const courses = response.data;
        dispatch({
            type: coursesConstants.GET_COURSES_PAGE_SUCCESS,
            payload: {
                courses
            }
        });
    }
    else {
        const error = response.data;
        dispatch({ type: coursesConstants.GET_COURSES_PAGE_FAILURE, payload: { error } });
    }
}
}