
import * as types from '../constants/action-types';

import {STATE_POPULAR,STATE_FILTERED } from '../constants/site-constants'

const initialState = {

    filterState:STATE_FILTERED
};


function siteStateData(state = initialState.filterState, action) {
    switch (action.type) {

        case types.SWITCH_SITE_STATE:

        console.log ("SWITCH STATE")
            
      
        return [...state, action.payload]


        default:
            return state
    }

}

export default siteStateData;


