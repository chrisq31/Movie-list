//action creators

import { GET_MOVIE_DATA,GET_GENRE_DATA,FILTER_GENRE,FILTER_RATING ,SORT_POPULAR} from "../constants/action-types";

// eg Action and Drama
export const filterByGenre = (genrePayload) => ({
    type: FILTER_GENRE,
    genrePayload
   
})

// eg movie Rating >=5
export const filterByRating = (ratingPayload) => ({
    type: FILTER_RATING,
    ratingPayload
   
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







