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



    const movies = props.movieList;
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







export default ListViewHolder

