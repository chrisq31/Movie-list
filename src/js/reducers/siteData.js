
import * as types from '../constants/action-types'
import {STATE_POPULAR,STATE_FILTERED}  from '../constants/site-constants'

const initialState = {
    dataLoadingMovieList: true,
    dataLoadingGenreList: true,
    movieList: [],
    genresList: [],
    filterState:STATE_FILTERED
};


function siteData(state = initialState, action) {

    let array


    switch (action.type) {

        case types.MOVIE_LIST_DATA_LOADED:
            array = action.payload.results;
            return { ...state, movieList: array, dataLoadingMovieList: false }

        case types.MOVIE_GENRES_DATA_LOADED:
            array = action.payload.genres;
            return { ...state, genresList: array, dataLoadingGenreList: false }


        case types.API_ERRORED_MOVIE_LIST:

            console.log('API_ERRORED_MOVIE_LIST')
            return

        case types.API_ERRORED_GENRE_LIST:

            console.log('API_ERRORED_GENRE_LIST')
            return

        default:
            return state
    }

}

export default siteData;


