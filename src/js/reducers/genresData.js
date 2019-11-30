
import * as types from '../constants/action-types'
import { STATE_POPULAR, STATE_FILTERED } from '../constants/site-constants'
import _ from 'lodash';

const initialState = {

    genresSelectedList: [],
    filterState: STATE_POPULAR
};


function genresData(state = initialState, action) {
    switch (action.type) {

        case types.ADD_GENRE:

        console.log('ypes.ADD_GENRE name : ',action.payload.name)

        console.log('ypes.ADD_GENRE id : ',action.payload.id)

            let genresIdArray = _.map(state.genresSelectedList, 'id'); // get ids for each gene tp check not in state

            if (genresIdArray.indexOf(action.payload.id) !== -1) {
                return state
            }

            return { ...state, genresSelectedList: [...state.genresSelectedList, action.payload], filterState: STATE_FILTERED }


        case types.SWITCH_SITE_STATE:

            return { ...state, genresSelectedList: [], filterState: STATE_POPULAR }

        default:
            return state
    }

}

export default genresData;


