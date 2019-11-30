import { createSelector } from "reselect";
import _ from 'lodash';
import { STATE_POPULAR, STATE_FILTERED } from '../constants/site-constants'


const movieList = (state) => state.siteData.movieList; // selector for movie genres

const selectedGenres = (state) => state.genresData.genresSelectedList; // selector genres for filtering

const siteState = (state) => state.genresData.filterState;



const separator = " - ";


const getGenreObjFromId =(id,state) =>{

    let result = state.siteData.genresList.find(element => element.id === id);

    return result;

}


const getGenre = (state, props) => {

    let filterCollectionarray = [];

    props.genreIds.forEach(element => {

      let genreObj = getGenreObjFromId(element,state);

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

//_.every(collection, [callback=identity], [thisArg])
//_.filter(collection, [callback=identity], [thisArg])

////_.filter(movieList, genresIdArray, [thisArg])

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

            default:

                console.log('GET MOVIES DEFAULT')
                return movieList;
        }

    })







