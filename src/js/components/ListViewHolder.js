import React from 'react';
import styled from 'styled-components';
import ListViewItem from "./ListViewItem";


const bgColor="#2d0808d1";
const MoviesContainer = styled.div`
display:flex;
padding-top:140px;
background-color:${bgColor};
`;

const textColor = "white";
const ListViewHolder = (props) => {

    const movies = props.movieList;


    const genArray =(id) =>{

        console.log('checking',id)

        const genre = 'Action'
        return genre

    }

   
    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }
    return (
        <MoviesContainer className="row">
            {movies.map(movie => (
                <ListViewItem key={movie.id} item={movie} genresArray ={genarray=>{genArray(0)}} />
            ))}
        </MoviesContainer>
    )
}







export default ListViewHolder

