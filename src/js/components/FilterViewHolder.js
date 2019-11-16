import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import FilterViewItem from "./FilterViewItem";
import{addGenre}from "../actions/index";


const bgColor="#961086";
const FilterContainer = styled.div`
display:flex;
position:fixed
box-sizing:border-box;

flex-direction:row;
align-items: flex-start; 
align-content: flex-start; 
justify-content: flex-start;
padding:0 2%;
background-color:${bgColor};
`;

const textColor = "white";
const FilterViewHolder = (props) => {

    const genres = props.genresList;

    const onGenreClick = (genreId) =>{

        console.log('genreId',genreId)

    }
    
    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }
    return (
        <FilterContainer className="row">
            {genres.map(genre => (
                <FilterViewItem key={genre.id} {...genre} onClick={() => onGenreClick(genre.id)}/>
            ))}
        </FilterContainer>
    )
}
const mapStateToProps = state => ({
    loadingMovieList: state.dataLoadingMovieList,
    loadingGenres: state.dataLoadingGenreList,
    genresList: state.genresList
});






export default connect(mapStateToProps)(FilterViewHolder);

