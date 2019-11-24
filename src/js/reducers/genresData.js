
import * as types from '../constants/action-types'
import {STATE_POPULAR,STATE_FILTERED } from '../constants/site-constants'

const initialState = {

    genresSelectedList: [],
    filterState:STATE_POPULAR
};


function genresData(state = initialState, action) {
    switch (action.type) {

        case types.ADD_GENRE:
            
        //TODO check genre not already in store

        console.log ("action.payload.id ",action.payload.id)

        console.log ("(state.genresSelectedList length ",state.genresSelectedList.length)

        console.log ("state.genresSelectedList ",[...state.genresSelectedList].indexOf(action.payload.id))
            
            if (state.genresSelectedList.indexOf(action.payload.id) !== -1) {
                return state
            }

           return { ...state, genresSelectedList: [...state.genresSelectedList,action.payload], filterState: STATE_FILTERED }

  
        case types.SWITCH_SITE_STATE:

            return { ...state,genresSelectedList:[], filterState: STATE_POPULAR }

       default:
            return state
    }

}

export default genresData;


