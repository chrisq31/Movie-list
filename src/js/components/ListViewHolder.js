import { connect } from "react-redux";
import React from 'react';
import styled from 'styled-components';
import ListViewItem from "./ListViewItem";
import { getMovies } from '../selectors/index'



const MoviesContainer = styled.div`
display:flex;
pointer-events: none;

padding:0;
margin:0;


`;


const ListViewHolder = (props) => {

    const movies = props.movies;



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

    return {
        loadingMovieList: state.siteData.dataLoadingMovieList,
        loadingGenres: state.siteData.dataLoadingGenreList,
        movies: getMovies(state)

    }

};

export default connect(mapStateToProps)(ListViewHolder);



