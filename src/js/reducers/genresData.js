
import * as types from '../constants/action-types'

const initialState = {

    genresSelectedList: []
};


function genresData(state = initialState.genresSelectedList, action) {
    switch (action.type) {

        case types.ADD_GENRE:

            // check genre not already in store
            if (state.indexOf(action.payload) !== -1) {
                return state
            }

            return [...state, action.payload]


        default:
            return state
    }

}

export default genresData;

