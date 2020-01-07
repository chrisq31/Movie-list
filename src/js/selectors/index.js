import { createSelector } from "reselect";
import _ from 'lodash';
import { STATE_POPULAR, STATE_FILTERED, STATE_RATING } from '../constants/site-constants'

//TODO remove lodash help,use native ES6 filtering


const movieList = (state) => state.siteData.movieList; // selector for movie genres

const genresSelectedIdArray = (state) => state.filteredData.genresSelectedIdArray; // ids of movies selected

const selectedGenres = (state) => state.filteredData.genresSelectedList; // selector genres for filtering

const ratingScore = (state) => state.filteredData.ratingScore; // selector ratings for filtering

const siteState = (state) => state.filteredData.filterState;



const separator = " - ";


const getGenreObjFromId = (id, state) => {


    let genresSelected = state.filteredData.genresSelectedList;



    let result = state.siteData.genresList.find(element => element.id === id);
    result.active = false;


    genresSelected.forEach(element => {


        if (element.id === result.id) {


            result.active = true;
        }



    })

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

// returns genres names selected 
export const getSelectedGenresByName = createSelector(
    [selectedGenres],
    (genres) => {
        return _.map(genres, 'name').join(separator);

    }
)







export const getMovies = createSelector(
    [genresSelectedIdArray, movieList, siteState, ratingScore],
    (genresIdArray, movieList, siteState, rating) => {

        let resultArray;

        switch (siteState) {

             case STATE_POPULAR:
                return movieList;
            
                case STATE_FILTERED:

                //genresIdArray - only contains ids of movies selected for quick comparison

                if (genresIdArray.length < 1) return movieList;

                let filteredArray = [];

                movieList.forEach(movie => {

                  

                    let movieGenreIds = movie.genre_ids;

                    let result = genresIdArray.every(v => movieGenreIds.includes(v));

                    if (result) {
                        filteredArray.push(movie);
                    }

                    }

                )



                return filteredArray;

            case STATE_RATING:

                // only show movies equal or above rating

               // let ratingsArray = _.map(_.orderBy(movieList, 'vote_average', 'desc'));

               let ratingsArray = [...movieList].sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1)



                resultArray = _.filter(ratingsArray, ({ vote_average }) => vote_average >= rating[rating.length - 1]);



                return resultArray

            default:

                console.log('GET MOVIES DEFAULT')
                return movieList;
        }

    })







