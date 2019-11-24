//action creators

import { GET_MOVIE_DATA, GET_GENRE_DATA, ADD_GENRE, SHOW_SUBMIT_GENRES, HIDE_SUBMIT_GENRES, FILTER_RATING, SORT_POPULAR, SWITCH_SITE_STATE } from "../constants/action-types";

// eg Action and Drama
export const addGenre = (payload) => ({
    type: ADD_GENRE,
    payload

})

export const switchState = () => ({
    type: SWITCH_SITE_STATE

})

export const showSubmitGenres = () => ({
    type: SHOW_SUBMIT_GENRES,

})

export const hideSubmitGenres = () => ({
    type: HIDE_SUBMIT_GENRES,

})



// eg movie Rating >=5
export const filterByRating = (payload) => ({
    type: FILTER_RATING,
    payload

})


// eg movie Rating >=5
export const sortByPopular = () => ({
    type: SORT_POPULAR

})

// dispatched from Loading View
export const getData = () => ({
    type: GET_MOVIE_DATA
})

export const getGenreData = () => ({
    type: GET_GENRE_DATA
})







