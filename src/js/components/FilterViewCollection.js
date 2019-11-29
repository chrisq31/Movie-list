import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import FilterViewItem from "./FilterViewItem";
import { addGenre } from "../actions/index";


const bgColor = "#f90202";

const primaryFontFamily = "league_gothicregular";

const FilterContainerHolder = styled.div`
display:flex;

flex-direction: column;
box-sizing:border-box;
top:0;
max-width:300px;
min-width:250px;
padding-top:20%;

min-height:80vh;



`;


const FilterContainer = styled.div`
font-family: ${primaryFontFamily};
text-transform: uppercase;
`;


class FilterViewCollection extends React.Component {


     render() {


        const genres = this.props.genresList;
        const onGenreClick = this.props.onGenreClick;

        if (this.props.loadingMovieList === true || this.props.loadingGenres === true) {

            return <div>Loading</div>
        }

        return (

            <FilterContainerHolder>
                <FilterContainer>

                    {genres.map(genre => (
                        <FilterViewItem key={genre.id} {...genre} onClick={() => onGenreClick({ ...genre })} />
                    ))}
                </FilterContainer>

             </FilterContainerHolder>


        )

    }







}
const mapStateToProps = state => ({
  
    genresList: state.siteData.genresList
});

const mapDispatchToProps = dispatch => ({
    onGenreClick: genreObj => dispatch(addGenre(genreObj))
})






export default connect(mapStateToProps, mapDispatchToProps)(FilterViewCollection);

