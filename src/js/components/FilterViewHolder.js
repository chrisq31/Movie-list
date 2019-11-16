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
    //const onGenreClick =props.onGenreClick;

    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }
    return (
        <FilterContainer className="row">
            {genres.map(genre => (
                <FilterViewItem key={genre.id} {...genre} onClick={() => props.onGenreClick(genre.id)}/>
            ))}
        </FilterContainer>
    )
}
const mapStateToProps = state => ({
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
    genresList: state.siteData.genresList
});

const mapDispatchToProps = dispatch => ({
    onGenreClick: id => dispatch(addGenre(id))
  })






export default connect(mapStateToProps,mapDispatchToProps)(FilterViewHolder);

