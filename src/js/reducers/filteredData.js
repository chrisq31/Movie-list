
import * as types from '../constants/action-types'
import { STATE_POPULAR, STATE_FILTERED, STATE_RATING } from '../constants/site-constants'
import _ from 'lodash';



const initialState = {

    genresSelectedList: [],
    ratingScore: [],
    filterState: STATE_POPULAR
};


function filteredData(state = initialState, action) {
    switch (action.type) {

        case types.ADD_GENRE:

            let genresIdArray = _.map(state.genresSelectedList, 'id'); // get ids for each gene to check not in state
            //TODO toggle if already in selected
            if (genresIdArray.indexOf(action.payload.genre.id) !== -1) {
                return state
            }

            return { ...state, genresSelectedList: [...state.genresSelectedList, action.payload.genre], filterState: STATE_FILTERED }

        case types.FILTER_RATING:

            return { ...state, ratingScore: [...state.ratingScore, action.payload.vote_average], genresSelectedList: [], filterState: STATE_RATING }

        case types.SWITCH_SITE_STATE:

            return { ...state, ...initialState } // reset

        default:
            return state
    }

}

export default filteredData;


