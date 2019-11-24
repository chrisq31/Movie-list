import { connect } from "react-redux";
import {getSelectedGenresMatchingMovies} from '../selectors/index'

import React from 'react';
import styled from 'styled-components';
import ListViewItem from "./ListViewItem";



const MoviesContainer = styled.div`
display:flex;
padding-top:140px;
box-sizing:border-box;
pointer-events: none;


`;

const textColor = "white";
const ListViewHolder = (props) => {
  
    console.log ('selectedMovieInGenre ', getSelectedGenresMatchingMovies)
    console.log('props : ', props)





    //const movies = props.movieList;

    const movies = props.selectedMovieInGenre;


    
    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }
    return (
        <MoviesContainer className="row">
            {movies.map(movie => (
                <ListViewItem key={movie.id} item={movie} />
            ))}
        </MoviesContainer>
    )
}





const mapStateToProps = (state) => {

    return{
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
 
     movieList: state.siteData.movieList,
    selectedMovieInGenre:getSelectedGenresMatchingMovies(state)

}
 
};

export default connect(mapStateToProps)(ListViewHolder);



