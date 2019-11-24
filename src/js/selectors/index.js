import { createSelector } from "reselect";
import _ from 'lodash';



const genresList = (state) => state.siteData.genresList; // selector genres for filtering
const selectedGenres = (state) => state.genresData; // selector genres for filtering
const movieListGenres = (state) => state.siteData.movieList.genre_ids; // selector for movie genres
const movieList = (state) => state.siteData.movieList; // selector for movie genres

const separator = " - ";



export const getSelectedGenresByName = createSelector(
    [selectedGenres],
    (genres) => {
        return _.map(genres, 'name').join(separator);

    }
)

const getIntersection = (arr1, arr2) => {

    return _.intersection(arr1, arr2);
}

export const getSelectedGenresMatchingMovies = createSelector(
    [selectedGenres, movieList],
    (genres, movieList) => {


          console.log('genresb selected',genres)


          let genresIdArray =  _.map(genres, 'id')


          console.log('genresIdArray',genresIdArray)


        movieList.forEach(movie => {
            

            let movieGenreIds = movie.genre_ids;

            console.log('movieGenreIds',movieGenreIds)
            // console.log('genres',genres)


            let result = getIntersection(genresIdArray, movieGenreIds)
            console.log('result',result)

            if (result.length > 0) {
                console.log('element parent ', movie.title)
            }

        }

        )
    })







