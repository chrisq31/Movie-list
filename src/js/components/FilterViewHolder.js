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
flex-direction: row;
box-sizing:border-box;
top:0;
margin-top:30px;

`;


const FilterContainer = styled.div`
// display:flex;
position:relative;
box-sizing:border-box;
width:100%;
height:100vh;

top:100px ;
margin:0 5%;
background-color:${bgColor};

font-family: ${primaryFontFamily};
text-transform: uppercase;
`;


class FilterViewHolder extends React.Component {


     render() {


        const genres = this.props.genresList;
        const onGenreClick = this.props.onGenreClick;

        if (this.props.loadingMovieList === true || this.props.loadingGenres === true) {

            return <div>Loading</div>
        }

        return (

            <FilterContainerHolder>
                <FilterContainer className="row">

                    {genres.map(genre => (
                        <FilterViewItem key={genre.id} {...genre} onClick={() => onGenreClick({ ...genre })} />
                    ))}
                </FilterContainer>



                <FilterContainer className="row">

                    {genres.map(genre => (
                        <FilterViewItem key={genre.id} {...genre} onClick={() => onGenreClick({ ...genre })} />
                    ))}
                </FilterContainer>


            </FilterContainerHolder>


        )

    }







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

