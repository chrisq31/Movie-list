import { createSelector } from "reselect";
import _ from 'lodash';



const selectedGenres = (state) => state.genresData; // selector genres for filtering

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


        if (genres.length < 1) return;

        let genresIdArray = _.map(genres, 'id'); // get ids for each gene

        console.log('genresIdArray ',genresIdArray)

        movieList.forEach(movie => {

            let movieGenreIds = movie.genre_ids;
            // get intersection (common overlap) betwwen two arrays
            let result = getIntersection(genresIdArray, movieGenreIds)


            if (result.length > 0) {
                console.log('element parent ', movie.title)

                return result;
            }

        }

        )
    })







