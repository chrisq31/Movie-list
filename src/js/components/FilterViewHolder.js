import React from 'react';
import styled from 'styled-components';
import FilterViewItem from "./FilterViewItem";


const bgColor="#961086";
const FilterContainer = styled.div`
display:flex;
position:fixed

flex-direction:row;
align-items: flex-start; 
align-content: flex-start; 
justify-content: flex-start;
padding:5%;
background-color:${bgColor};
`;

const textColor = "white";
const FilterViewHolder = (props) => {

    const genres = props.genresList;
    
    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }
    return (
        <FilterContainer className="row">
            {genres.map(genre => (
                <FilterViewItem key={genre.id} item={genre} />
            ))}
        </FilterContainer>
    )
}







export default FilterViewHolder
