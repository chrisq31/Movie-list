
import * as types from '../constants/action-types'

const initialState = {

    genresSelectedList: [],
    submitGenres:false
};


function genresData(state = initialState.genresSelectedList, action) {
    switch (action.type) {

        case types.ADD_GENRE:
            
        //TODO check genre not already in store
            
            if (state.indexOf(action.payload.id) !== -1) {
                return state
            }

            return [...state, action.payload];

            case types.SUBMIT_GENRES:

                    return {...state, submitGenres:true};

                

            console.log('submit')


            return


        default:
            return state
    }

}

export default genresData;


