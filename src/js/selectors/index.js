import {createSelector} from "reselect";
import _ from 'lodash';



const genresList =(state) => state.siteData.genresList; // selector genres for filtering
const selectedGenres =(state) => state.genresData; // selector genres for filtering
const movieListGenres =(state) => state.siteData.movieList.genre_ids; // selector for movie genres
const movieList =(state) => state.siteData.movieList; // selector for movie genres



export const getSelectedGenresByName = createSelector(
    [selectedGenres],
    (genres) =>{

        console.log('genres >>',genres)
    
       return  _.map(genres, 'name');

    }
) 

   
    //return  _.map(selectedGenres, 'name');

