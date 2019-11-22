
import * as types from '../constants/action-types'

const initialState = {

    genresSelectedList: []
};


function genresData(state = initialState.genresSelectedList, action) {
    switch (action.type) {

        case types.ADD_GENRE:
            
        console.log ('action.payload ',action.payload)
        console.log ('action.payload.id ',action.payload.id)
            // check genre not already in store
            // if (state.indexOf(action.payload.id) !== -1) {
            //     return state
            // }

            //array = action.payload.results;
            // return { ...state, movieList: array, dataLoadingMovieList: false }

            console.log ('...state ',...state)

            return [...state, action.payload]


        default:
            return state
    }

}

export default genresData;


