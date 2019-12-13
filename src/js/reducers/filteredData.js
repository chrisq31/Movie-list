
import * as types from '../constants/action-types'
import { STATE_POPULAR, STATE_FILTERED, STATE_RATING } from '../constants/site-constants'




const initialState = {

    genresSelectedList: [], // stores full genre properties
    genresSelectedIdArray: [], // stores only ids for faster searching
    ratingScore: [],
    filterState: STATE_POPULAR
};


function filteredData(state = initialState, action) {
    switch (action.type) {

        case types.ADD_REMOVE_GENRE:

            // check if already selected - if already selected, remove it

            let searchIndex = state.genresSelectedIdArray.indexOf(action.payload.genre.id);

            if (searchIndex !== -1) {
                
                //remove
                return { ...state, genresSelectedList: state.genresSelectedList.filter(item => item.id !== action.payload.genre.id), genresSelectedIdArray: state.genresSelectedIdArray.filter(item => item !== action.payload.genre.id) }
            }

            // otherwise add to state

            return { ...state, genresSelectedList: [...state.genresSelectedList, action.payload.genre], genresSelectedIdArray: [...state.genresSelectedIdArray, action.payload.genre.id], filterState: STATE_FILTERED }

        case types.FILTER_RATING:

            return { ...state, ratingScore: [...state.ratingScore, action.payload.vote_average], genresSelectedList: [], filterState: STATE_RATING }

        case types.SWITCH_SITE_STATE:

            return { ...state, ...initialState } // reset

        default:
            return state
    }

}

export default filteredData;


