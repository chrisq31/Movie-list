import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import FilterViewItem from "./FilterViewItem";
import { addGenre } from "../actions/index";


const bgColor = "#f90202";

const primaryFontFamily = "league_gothicregular";

const FilterContainerHolder = styled.div`
display:flex;
position:fixed;
box-sizing:border-box;
top:0;
margin-top:30px;

`;


const FilterContainer = styled.div`
display:flex;
position:relative;
box-sizing:border-box;

flex-direction:row;
align-items: flex-start; 
align-content: flex-start; 
justify-content: flex-start;
padding:0 2%;
background-color:${bgColor};

font-family: ${primaryFontFamily};
text-transform: uppercase;
`;

const textColor = "white";
const FilterViewHolder = (props) => {

    const genres = props.genresList;
    const onGenreClick = props.onGenreClick;

    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }
    return (

        <div className="row">

            <FilterContainerHolder>
                <FilterContainer className="row">

                    {genres.map(genre => (
                        <FilterViewItem key={genre.id} {...genre} onClick={() => onGenreClick({...genre})} />
                    ))}
                </FilterContainer>

                <FilterContainer className="row">
                    {genres.map(genre => (
                        <FilterViewItem key={genre.id} {...genre} onClick={() => onGenreClick(genre)} />
                    ))}
                </FilterContainer>

                <FilterContainer className="row">

                    {genres.map(genre => (
                        <FilterViewItem key={genre.id} {...genre} onClick={() => onGenreClick(genre)} />
                    ))}
                </FilterContainer>

            </FilterContainerHolder>

        </div>
    )
}
const mapStateToProps = state => ({
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
    genresList: state.siteData.genresList
});

const mapDispatchToProps = dispatch => ({
    onGenreClick: genreObj => dispatch(addGenre(genreObj))
})






export default connect(mapStateToProps, mapDispatchToProps)(FilterViewHolder);

