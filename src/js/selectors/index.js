import { createSelector } from "reselect";
import _ from 'lodash';
import {STATE_POPULAR,STATE_FILTERED}  from '../constants/site-constants'



const selectedGenres = (state) => state.genresData; // selector genres for filtering

const movieList = (state) => state.siteData.movieList; // selector for movie genres

const filterState =(state) => state.siteData.filterState;

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

export const getSelectedGenresMatchingMovies =  createSelector(
    [selectedGenres, movieList,filterState],
    (genres, movieList,siteState) => {

        switch(siteState){

            case STATE_POPULAR:

            console.log('STATE_POPULAR')

            return movieList;

 

            break


            case STATE_FILTERED:

            console.log('STATE_FILTERED')
        
             break

             default:

             console.log('DEFAULT')
        }


        console.log('genres ',genres)

        console.log('siteState ',siteState)

        if (genres.length < 1) return;

        let genresIdArray = _.map(genres, 'id'); // get ids for each gene

        let filteredArray = [];

        console.log('genresIdArray ',genresIdArray)

        movieList.forEach(movie => {

            let movieGenreIds = movie.genre_ids;
            // get intersection (common overlap) betwwen two arrays
            let result = getIntersection(genresIdArray, movieGenreIds)


            if (result.length > 0) {
                console.log('element parent ', movie.title)
                

                filteredArray.push(movie)


                console.log('filteredArray ', filteredArray)
                return filteredArray;
            }

        }

        )
    })







