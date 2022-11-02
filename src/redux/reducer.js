import { SHOW, CITY, GUEST, SHOW_SIDE,DETAIL } from './actionType';

const initialState = {
    show: false,
    city: '',
    guest: '',
    showSide: false,
    detail:[]
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW:
            return {
                ...state,show:payload
            }
        case CITY:
            return {
                ...state,city:payload
            }
        case GUEST:
            return {
                ...state,guest:payload
            }
        case SHOW_SIDE:
            return {
                ...state,showSide:payload
            }
        case DETAIL:
            return {
                ...state,detail:payload
            }
        default:
            return state;
    }
}

export default reducer;