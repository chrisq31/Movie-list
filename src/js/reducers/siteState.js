
import * as types from '../constants/action-types'

const initialState = {

    filterState: false
};


function siteState(state = initialState.filterState, action) {
    switch (action.type) {

        case types.SUBMIT_GENRES:
            
        return {...state, filterState:true}


        default:
            return state
    }

}

export default siteState;


