import { SHOW, CITY, GUEST, SHOW_SIDE, DETAIL } from './actionType';

export const showSearch = (show) => (dispatch) => {
    dispatch({
        type: SHOW,
        payload: show
    });
}

export const citySearch = (city) => (dispatch) => {
    dispatch({
        type: CITY,
        payload: city
    });
}

export const guestSearch = (guest) => (dispatch) => {
    dispatch({
        type: GUEST,
        payload:guest
    })
}

export const showSideBar = (side) => (dispatch) => {
    dispatch({
        type: SHOW_SIDE,
        payload:side
    })
} 

export const detail = (detail) => (dispatch) => {
    console.log("asdfghjkl")
    dispatch({
        type: DETAIL,
        payload:detail
    })
}