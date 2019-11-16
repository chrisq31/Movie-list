//action creators

import { GET_MOVIE_DATA,GET_GENRE_DATA,ADD_GENRE,SUBMIT_GENRES,SHOW_SUBMIT_GENRES,HIDE_SUBMIT_GENRES,FILTER_RATING ,SORT_POPULAR} from "../constants/action-types";

// eg Action and Drama
export const addGenre = (payload) => ({
    type: ADD_GENRE,
    payload
   
})

export const submitGenres = () => ({
    type: SUBMIT_GENRES,

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
export const getData =() => ({
    type: GET_MOVIE_DATA
})

export const getGenreData =() => ({
  type: GET_GENRE_DATA
})







