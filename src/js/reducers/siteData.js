
import * as types from '../constants/action-types'


const initialState = {
    dataLoadingMovieList: true,
    dataLoadingGenreList: true,
    movieList: [],
    genresList: [],
    error: {}

};


function siteData(state = initialState, action) {

    let array


    switch (action.type) {

        case types.MOVIE_LIST_DATA_LOADED:
            array = action.payload.results;
            let resultArray = [...array].sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)

            return { ...state, movieList: resultArray, dataLoadingMovieList: false }


        case types.MOVIE_GENRES_DATA_LOADED:
            array = action.payload.genres;
            return { ...state, genresList: array, dataLoadingGenreList: false }


        case types.API_ERRORED_MOVIE_LIST:

            console.log('API_ERRORED_MOVIE_LIST')
            return { ...state, error: action.error }

        case types.API_ERRORED_GENRE_LIST:

            console.log('API_ERRORED_GENRE_LIST')
            return { ...state, error: action.error }

        default:
            return state
    }

}

export default siteData;


