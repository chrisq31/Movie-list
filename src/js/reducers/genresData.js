
import * as types from '../constants/action-types'

const initialState = {

    genresSelectedList: []
};


function genresData(state = initialState, action) {
     switch (action.type) {
        
        case types.ADD_GENRE:

            if (state.indexOf(action.payload) !== -1) {
                return state
            }

            return { ...state, genresSelectedList: action.payload }


        default:
            return state
    }

}

export default genresData;


