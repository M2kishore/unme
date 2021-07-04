import axios from "axios";
import {
    GET_SUCCESSFUL,
    GET_FAILED,
    GET_GETTING
} from '../types/types'
export const fetchUsers = () => {
    return dispatch => {
        dispatch(getGetting());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            dispatch(getSuccessful())
            //response.data is the array of users
            const users = response.data;
            console.log(users);
        })
        .catch(err => {
            //err.message
            console.log(err.message);
            dispatch(getFailed())
        })
    }
}

const getGetting = () => {
    return {type: GET_GETTING}
};

const getSuccessful = () => {
    return {type: GET_SUCCESSFUL}
}

const getFailed = () => {
    return {type: GET_FAILED}
}
