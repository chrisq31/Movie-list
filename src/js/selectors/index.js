import {createSelector} from "reselect";


const genresList =(state) => state.siteData.genresList; // selector genres for filtering
const selectedGenres =(state) => state.genresData; // selector genres for filtering
const movieListGenres =(state) => state.siteData.movieList.genre_ids; // selector for movie genres
const movieList =(state) => state.siteData.movieList; // selector for movie genres


// TODO returm full movieList if selectedGenres length = 0
// so can use one selector for movie listing

export const getMoviesInGenres = createSelector(


    [movieListGenres, selectedGenres],
    (movieGenresIds, genresIdArray) =>
    {


        console.log('SELECTOR selectedGenres ',selectedGenres)

        if (genresIdArray.length < 1)
        {
            console.log('SELECTOR selectedGenres ',selectedGenres)
            console.log('no genres ', movieList)
            return movieList
        }else{
            // need to find intersections between movie genre_ids and selected genres
            // then return the movies (if any) that intersect
            
            let intersection = movieGenresIds.filter(id => genresIdArray.includes(id));
            console.log('genres selected ', genresIdArray)
            console.log('intersections ', intersection)


      
            return intersection;

        }

   
    }
);

export const getGenresById = createSelector(

   


    [genresList, selectedGenres],
    (list, genresIds) =>
    {

        console.log('selector ',selectedGenres)
     
        let intersection = list.filter(id => genresIds.includes(id));
      
        console.log('intersectionsGenres ', intersection)


  
        return intersection;
    }
);

