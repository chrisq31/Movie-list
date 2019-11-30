import { createSelector } from "reselect";
import _ from 'lodash';
import { STATE_POPULAR, STATE_FILTERED, STATE_RATING } from '../constants/site-constants'


const movieList = (state) => state.siteData.movieList; // selector for movie genres

const selectedGenres = (state) => state.filteredData.genresSelectedList; // selector genres for filtering

const ratingScore = (state) => state.filteredData.ratingScore; // selector ratings for filtering

const siteState = (state) => state.filteredData.filterState;



const separator = " - ";


const getGenreObjFromId = (id, state) => {

    let result = state.siteData.genresList.find(element => element.id === id);

    return result;

}


const getGenre = (state, props) => {

    let filterCollectionarray = [];

    props.genreIds.forEach(element => {

        let genreObj = getGenreObjFromId(element, state);

        filterCollectionarray.push(genreObj);

    });

    return filterCollectionarray;

}


export const getGenreArray = () => {
    return createSelector(
        [getGenre],
        (genreArray) => {
            return genreArray;
        }
    )


}

export const getSelectedGenresByName = createSelector(
    [selectedGenres],
    (genres) => {
        return _.map(genres, 'name').join(separator);

    }
)

const getIntersection = (arr1, arr2) => {

    // arr1:movielist.genres id
    // arr2: selected genres id

    return _.intersection(arr1, arr2);
}






export const getMovies = createSelector(
    [selectedGenres, movieList, siteState,ratingScore],
    (genres, movieList, siteState,rating) => {

        let resultArray;

        switch (siteState) {

            case STATE_POPULAR:
                // return movielist sorted on popularity

                resultArray = _.map(_.orderBy(movieList, 'popularity', 'desc'));

                return resultArray;


            case STATE_FILTERED:

                if (genres.length < 1) return movieList;

                console.log ('genres ',genres)

                let genresIdArray = _.map(genres, 'id'); // get ids for each genre

                let filteredArray = [];

                // need to check intersection meets ALL conditions of selected genres
                // either can filter complete movieList
                // or filter previous filtered array for new condition


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

            case STATE_RATING:

            console.log('rating : ',rating)

            resultArray = _.map(_.orderBy(movieList, 'vote_average', 'desc'));



                return resultArray

            default:

                console.log('GET MOVIES DEFAULT')
                return movieList;
        }

    })







