import { createSelector } from "reselect";
import _ from 'lodash';
import { STATE_POPULAR, STATE_FILTERED } from '../constants/site-constants'


const movieList = (state) => state.siteData.movieList; // selector for movie genres

const selectedGenres = (state) => state.genresData.genresSelectedList; // selector genres for filtering

const siteState = (state) => state.genresData.filterState;

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

export const getMovies = createSelector(
    [selectedGenres, movieList, siteState],
    (genres, movieList, siteState) => {
        
      switch (siteState) {

            case STATE_POPULAR:

               return movieList;

            case STATE_FILTERED:



                if (genres.length < 1) return movieList;

                let genresIdArray = _.map(genres, 'id'); // get ids for each gene

                let filteredArray = [];


                movieList.forEach(movie => {

                    let movieGenreIds = movie.genre_ids;
                    // get intersection (common overlap) betwwen two arrays
                    let result = getIntersection(genresIdArray, movieGenreIds)

                    if (result.length > 0) {

                        filteredArray.push(movie)
                    }

                }

                )

                return filteredArray;

            default:

                console.log('DEFAULT')
                return movieList;
        }

    })







